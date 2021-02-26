import OpenTrivController from "./Controllers/OpenTrivController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  //valuesController = new ValuesController();
  openTrivController = new OpenTrivController();
}

window["app"] = new App();
