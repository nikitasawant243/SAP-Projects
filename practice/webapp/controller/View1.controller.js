sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View1", {

        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel({
                buttonText: "Click Me"
            });
            this.getView().setModel(oModel);
        },

        onButtonPress: function () {
            var oModel = this.getView().getModel();
            var sCurrentText = oModel.getProperty("/buttonText");

            if (sCurrentText === "Click Me") {
                oModel.setProperty("/buttonText", "Clicked!");
            } else {
                oModel.setProperty("/buttonText", "Click Me");
            }

            MessageToast.show("Button pressed");
        }
    });
});