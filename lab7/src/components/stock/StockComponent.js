export class StockComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.company_name}</h5>
                                <p class="card-text">Рейтинг: ${data.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        console.log(data)
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}