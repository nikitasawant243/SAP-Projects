sap.ui.define([
    "demo/mock/test/mockServer",
    "sap/ui/core/ComponentContainer"
], function (mockServer, ComponentContainer) {
    "use strict";

    mockServer.init();

    new ComponentContainer({
        name: "demo.mock",
        settings: {
            id: "demo.mock"
        },
        async: true
    }).placeAt("content");
});