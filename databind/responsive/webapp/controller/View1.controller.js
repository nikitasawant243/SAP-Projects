sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("demo.responsive.responsive.controller.View1", {
        onInit: function () {
            var oData = {
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                city: "",
                country: ""
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});