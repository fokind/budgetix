import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace fokind.budgetix.controller
 */
export default class MainController extends Controller {
  public onInit(): void {
    // TODO
  }

  public sayHello(): void {
    MessageBox.show("Hello World!");
  }
}
