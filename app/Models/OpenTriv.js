export default class OpenTriv {
    constructor(data) {
        this.title = data.title
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 openTriv">
            ${this.title}
        </div>
        `
    }
}
