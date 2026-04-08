
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
    
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View6", {

        onInit: function () {
            var oModel = new JSONModel({
                number: "",
                
            });
            this.getView().setModel(oModel);

        },

        onLiveChange: function (oEvent){
            var sValue = oEvent.getParameter("value") || "";
            var oInput = this.byId("numberInput");

            // allow only digits
            var bValid = /^\d*$/.test(sValue);
    

            //validation
            if(!sValue) {
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            } else if (bValid){
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid number");
            } 
            else {
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Only numbers allowed");
            }
        }
    });
});