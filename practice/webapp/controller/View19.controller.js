sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("demo.controller.View1", {

        onInit: function () {

            var oData = {
                employees: [
                    { id: "101", name: "Arun", city: "Chennai" },
                    { id: "102", name: "Bala", city: "Hyderabad" },
                    { id: "103", name: "Cathy", city: "Bangalore" },
                    { id: "104", name: "David", city: "Mumbai" },
                    { id: "105", name: "Eva", city: "Delhi" }
                ]
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

        },

        onSearch: function (oEvent) {

            var sValue = oEvent.getParameter("newValue");
            var oTable = this.getView().byId("idTable");
            var oBinding = oTable.getBinding("items");

            var aFilters = [];

            if (sValue) {
                aFilters.push(
                    new Filter({
                        filters: [
                            new Filter("name", FilterOperator.Contains, sValue),
                            new Filter("city", FilterOperator.Contains, sValue)
                        ],
                        and: false
                    })
                );
            }

            oBinding.filter(aFilters);
        }

    });
});