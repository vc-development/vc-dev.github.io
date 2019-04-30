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
            el: '#calc-balcone',
            data: {
                names: data.names,

                // Balcone
                balcone: {
                    materials: data.balcone.materials,
                    material: 0,
                    structure: 2,
                    options: [
                        { value: 'Глухая', img: 'calc-window-4.png' },
                        { value: 'Раздвижная', img: 'calc-window-5.png' }
                    ],
                    bends: [],
                    cold: data.balcone.cold,
                    warm: data.balcone.warm,
                    height: 0
                }
            },
            methods: {
                setLocalStorage() {
                    let resourse
                    let sections = []

                    this.balconeParams.map((section, index) => {
                        let sash = []
                        section.sashs.map((el, index) => {
                            sash.push(
                                `Створка - ${index + 1} (${el.option.value})`
                            )
                        })
                        sections.push(`Секция - ${index + 1}, ${sash}`)
                    })
                    resourse = `Тип: Остекление балкона, Материал: ${
                        this.balcone.materials[this.balcone.material].name
                    }, Высота: ${this.balcone.height}, Изгибов: ${
                        this.balcone.structure
                    }, Секции: ${sections}`

                    localStorage.setItem('osteklenie', JSON.stringify(resourse))
                },
                balconeFilterSashs(bend) {
                    if (bend.width > 10000) bend.width = 10000
                    return bend.sashs.filter((el, index) => {
                        return index <= Math.floor(bend.width / 1000)
                    })
                },
                setBalconeMaterial(index) {
                    this.balcone.material = index
                    if (index === 0) {
                        this.balcone.options = [
                            { value: 'Глухая', img: 'calc-window-4.png' },
                            { value: 'Раздвижная', img: 'calc-window-5.png' }
                        ]
                        this.balcone.bends = this.balcone.cold
                    } else if (index === 1) {
                        this.balcone.options = [
                            { value: 'Глухая', img: 'calc-window-1.png' },
                            { value: 'Поворотная', img: 'calc-window-2.png' },
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
