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
			el: '#calc-wood',
			data: {
				names: data.names,

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
				}
			},
			methods: {
				setLocalStorage() {
					let resourse

					resourse = `Тип: Деревянные окна, Конструкция: ${
                        this.names[this.wood.construction]
                    }, Материал: ${
                        this.wood.materials[this.wood.material].name
                    }, Цвет: ${
                        this.wood.materials[this.wood.set].names[
                            this.wood.color
                        ]
                    }, Ширирна: ${this.wood.width}, Высота: ${this.wood.height}`

					localStorage.setItem('osteklenie', JSON.stringify(resourse))
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
				}
			},
			computed: {
				// Widnow Wood
				woodColors() {
					return this.wood.materials[this.wood.material].colors
				},
				woodMaterial() {
					return this.wood.materials[this.wood.material]
				}
			},
			updated() {
				this.setLocalStorage()
			},
			created() {
				this.setLocalStorage()
			}
		})
	}
)