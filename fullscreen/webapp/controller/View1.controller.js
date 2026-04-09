sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("demo.fullscreen.fullscreen.controller.View1", {
    onSelectFlight: function (oEvent) {
      const oItem = oEvent.getParameter("listItem");
      const oContext = oItem.getBindingContext("flights");
      const oData = oContext.getObject();

      MessageToast.show(
        "Selected: " + oData.carrier + " / " + oData.connection
      );
    }
  });
});


