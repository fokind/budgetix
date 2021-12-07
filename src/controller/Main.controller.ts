import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace fokind.budgetix.controller
 */
export default class MainController extends Controller {
  public onInit(): void {
    UIComponent.getRouterFor(this)
      .getRoute("main")
      .attachPatternMatched(() => this._onRouteMatched(), this);
  }

  private _onRouteMatched(): void {
    (this.getView().getModel("view") as JSONModel).setProperty("/tab", "main");
  }
}
