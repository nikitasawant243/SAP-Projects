sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View20", {

        onInit: function () {

            var oData = {
                tiles: [
                    { title: "Employees", subtitle: "Total Count", value: "150" },
                    { title: "Sales", subtitle: "This Month", value: "320" },
                    { title: "Orders", subtitle: "Pending", value: "45" },
                    { title: "Revenue", subtitle: "Today", value: "1200" },
                    { title: "Customers", subtitle: "New", value: "25" }
                ]
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        // 🔥 onclick (press event)
        onTilePress: function (oEvent) {

            // Get clicked tile data
            var oContext = oEvent.getSource().getBindingContext();
            var oData = oContext.getObject();

            // Set text on second page
            this.byId("detailText").setText(
                "You clicked: " + oData.title
            );

            // Navigate
            this.byId("myApp").to(this.byId("page2"));
        },

        onBack: function () {
            this.byId("myApp").back();
        }

    });
});