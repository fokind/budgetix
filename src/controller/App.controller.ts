import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import Event from "sap/ui/base/Event";
import AppComponent from "../Component";

/**
 * @namespace fokind.budgetix.controller
 */
export default class AppController extends Controller {
  public onInit(): void {
    // apply content density mode to root view
    this.getView().addStyleClass(
      (this.getOwnerComponent() as AppComponent).getContentDensityClass()
    );
  }

  public onTabSelect(oEvent: Event): void {
    UIComponent.getRouterFor(this).navTo(oEvent.getParameter("key"));
  }
}
