const jsonReq = (file, callback) => {
	const req = new XMLHttpRequest()
	req.overrideMimeType('application/json')
	req.open('GET', file, true)
	req.onreadystatechange = () => {
		if (req.readyState === 4 && req.status == '200') {
			callback(req.responseText)
		}
	}
	req.send(null)
}

jsonReq(
	'./js/vue/data.json',
	res => {
		const data = JSON.parse(res)
		new Vue({
			el: '#calculator',
			data: {
				types: data.types,
				activeType: 0,
				names: data.names,

				// Window Plastic
				plastic: {
					tarif: 0,
					set: 0,
					construction: 0,
					tarifs: data.plastic.tarifs,
					sets: data.plastic.sets,
					width: 0,
					height: 0,
					lamination: false
				},

				// Widnow Wood
				wood: {
					materials: data.wood.materials,
					sets: data.wood.sets,
					url: './images/calculator/wood/',
					set: 0,
					construction: 0,
					material: 0,
					color: 0,
					width: 0,
					height: 0
				},

				// Balcone
				balcone: {
					materials: data.balcone.materials,
					material: 0,
					structure: 2,
					options: [{
							value: 'Глухая',
							img: 'calc-window-4.png'
						},
						{
							value: 'Раздвижная',
							img: 'calc-window-5.png'
						}
					],
					bends: [],
					cold: data.balcone.cold,
					warm: data.balcone.warm,
					height: 0
				}
			},
			methods: {
				setActiveType(index) {
					this.activeType = index
					this.setLocalStorage()
				},
				setLocalStorage() {
					let resourse
					if (this.activeType === 0) {
						// Plastic
						resourse = `Тип: ${
                            this.types[this.activeType].title
                        }, Тариф: ${
                            this.plastic.tarifs[this.plastic.tarif].name
                        }, Конструкция: ${
                            this.names[this.plastic.construction]
                        }, Ширирна: ${this.plastic.width}, Высота: ${
                            this.plastic.height
                        }, Ламинация: ${this.plastic.lamination ? 'да' : 'нет'}`
					} else if (this.activeType === 1) {
						// Wood
						resourse = `Тип: ${
                            this.types[this.activeType].title
                        }, Конструкция: ${
                            this.names[this.wood.construction]
                        }, Материал: ${
                            this.wood.materials[this.wood.material].name
                        }, Цвет: ${
                            this.wood.materials[this.wood.set].names[
                                this.wood.color
                            ]
                        }, Ширирна: ${this.wood.width}, Высота: ${
                            this.wood.height
                        }`
					} else if (this.activeType === 2) {
						// Balcone
						let sections = []
						this.balconeParams.map((section, index) => {
							let sash = []
							section.sashs.map((el, index) => {
								sash.push(
									`Створка - ${index + 1} (${
                                        el.option.value
                                    })`
								)
							})
							sections.push(`Секция - ${index + 1}, ${sash}`)
						})
						resourse = `Тип: ${
                            this.types[this.activeType].title
                        },Материал: ${
                            this.balcone.materials[this.balcone.material].name
                        }, Высота: ${this.balcone.height}, Изгибов: ${
                            this.balcone.structure
                        }, Секции: ${sections}`
					}
					localStorage.setItem('osteklenie', JSON.stringify(resourse))
				},

				// Window Plastic
				setPlasticSet(index) {
					this.plastic.set = index
					this.plastic.construction = this.plastic.sets[index].active
				},
				setPlasticConstruction(start, index) {
					window.UIkit.dropdown(`#plastic-set-${index}`).hide()
					this.plastic.construction = start
					this.plastic.sets[index].active = start
				},
				setPlasticTarif(index) {
					this.plastic.tarif = index
				},
				getPlasticConstruction(index) {
					return this.plastic.construction !== index
				},

				// Widnow Wood
				setWoodSet(index) {
					this.wood.set = index
					this.wood.construction = this.wood.sets[index].active
				},
				setWoodConstruction(start, index) {
					window.UIkit.dropdown(`#wood-set-${index}`).hide()
					this.wood.construction = start
					this.wood.sets[index].active = start
				},
				setWoodMaterial(index) {
					this.wood.material = index
					this.wood.color = 0
				},
				setWoodColor(index) {
					this.wood.color = index
				},
				getWoodSet(index) {
					return this.wood.set === index
				},
				getWoodConstruction(index) {
					return this.wood.construction !== index
				},
				// Balcone
				balconeFilterSashs(bend) {
					if (bend.width > 10000) bend.width = 10000
					return bend.sashs.filter((el, index) => {
						return index <= Math.floor(bend.width / 1000)
					})
				},
				setBalconeMaterial(index) {
					this.balcone.material = index
					if (index === 0) {
						this.balcone.options = [{
								value: 'Глухая',
								img: 'calc-window-4.png'
							},
							{
								value: 'Раздвижная',
								img: 'calc-window-5.png'
							}
						]
						this.balcone.bends = this.balcone.cold
					} else if (index === 1) {
						this.balcone.options = [{
								value: 'Глухая',
								img: 'calc-window-1.png'
							},
							{
								value: 'Поворотная',
								img: 'calc-window-2.png'
							},
							{
								value: 'Поворотно-откидная',
								img: 'calc-window-3.png'
							}
						]
						this.balcone.bends = this.balcone.warm
					}
				}
			},
			computed: {
				// Widnow Wood
				woodColors() {
					return this.wood.materials[this.wood.material].colors
				},
				woodMaterial() {
					return this.wood.materials[this.wood.material]
				},

				// Balcone
				balconeFilterBends() {
					return this.balcone.bends.filter((bend, index) => {
						return index <= this.balcone.structure
					})
				},
				balconeParams() {
					const newArray = this.balconeFilterBends.map(a => ({
						...a
					}))
					return newArray.map(bend => {
						if (bend.width > 10000) bend.width = 10000
						bend.sashs = bend.sashs.filter((el, index) => {
							return index <= Math.floor(bend.width / 1000)
						})
						return bend
					})
				}
			},
			updated() {
				this.setLocalStorage()
			},
			created() {
				this.balcone.bends = this.balcone.cold
				this.setLocalStorage()
			}
		})
	}
)