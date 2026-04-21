sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View21", {
        onFileChange: function (oEvent) {
            var oFileUploader = oEvent.getSurce();
            var sFileName = oFileUploader.getValue();

            MessageToast.show("Selected File: "+ sFileName);
        },

        onUpload: function () {
            var oFileUploader = this.byId("fileUploader");

            if(!oFileUploader.getValue()) {
                MessageToast.show("Please select a file first");
                return;
            }

            //Dummy upload  (no backend)
            MessageToast.show("File Uploaded successfully");
        }
    });
});