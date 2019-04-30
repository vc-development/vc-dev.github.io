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
            el: '#calc-plastic',
            data: {
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
                }
            },
            methods: {
                setLocalStorage() {
                    let resourse

                    resourse = `Тип: Пластиковые окна, Тариф: ${
                        this.plastic.tarifs[this.plastic.tarif].name
                    }, Конструкция: ${
                        this.names[this.plastic.construction]
                    }, Ширирна: ${this.plastic.width}, Высота: ${
                        this.plastic.height
                    }, Ламинация: ${this.plastic.lamination ? 'да' : 'нет'}`

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
