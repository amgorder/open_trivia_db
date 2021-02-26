import { ProxyState } from "../AppState.js";
import { openTrivService } from "../Services/OpenTrivService.js";


//Private
function _draw() {
    let openTriv = ProxyState.openTriv;
    let template = ''
    openTriv.forEach(v => template += v.Template)
    document.getElementById("app").innerHTML = /*html*/`
  <div className="card-colums openTriv">
    ${template}
    </div>
  <button class="btn btn-primary" onclick="app.openTrivController.next()">Next</button>
  `
}

//Public
export default class OpenTrivController {
    constructor() {
        ProxyState.on("openTriv", _draw);
        _draw()
    }

    addValue() {
        openTrivService.next()
    }

}
