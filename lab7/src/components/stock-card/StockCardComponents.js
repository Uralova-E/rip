export class StockCardComponent {
    constructor(parent) {
        this.parent = parent;
    }
    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="https://get.wallhere.com/photo/city-cityscape-building-reflection-Tourism-evening-bridge-river-town-St-Petersburg-Russia-canal-cathedral-palace-Church-of-the-Savior-on-Blood-landmark-waterway-tours-gondola-214048.jpg" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.company_name}</h5>
                        <p class="card-text">Рейтинг: ${data.price}</p>
                        <button class="btn btn-primary" id="click-card-${data.pk}" data-id="${data.pk}">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.pk}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}