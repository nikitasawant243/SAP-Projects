sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.loginfrom.loginform.controller.Login", {

        onUsernameChange: function (oEvent) {
            var val = oEvent.getParameter("value");
            var input = oEvent.getSource();

            var regex = /^[a-zA-Z]{3,10}$/;

            if (!regex.test(val)) {
                input.setValueState("Error");
                input.setValueStateText("3-10 letters only");
            } else {
                input.setValueState("Success");
            }
        },

        onPasswordChange: function (oEvent) {
            var val = oEvent.getParameter("value");
            var input = oEvent.getSource();

            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=(.*[@$!%*?&]){2,}).+$/;

            if (!regex.test(val)) {
                input.setValueState("Error");
                input.setValueStateText("Invalid password format");
            } else {
                input.setValueState("Success");
            }
        },

        onTogglePassword: function () {
            var input = this.byId("password");

            input.setType(
                input.getType() === "Password" ? "Text" : "Password"
            );
        },

        onSubmit: function () {
            var u = this.byId("username");
            var p = this.byId("password");

            if (u.getValueState() === "Success" &&
                p.getValueState() === "Success") {

                MessageToast.show("Login Successful ✅");

            } else {
                MessageToast.show("Fix errors ❌");
            }
        },

        onCancel: function () {
            this.byId("username").setValue("");
            this.byId("password").setValue("");

            this.byId("username").setValueState("None");
            this.byId("password").setValueState("None");
        }

    });
});