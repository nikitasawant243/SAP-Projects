sap.ui.define(["sap/ui/core/Core"], function(Core) {
    "use strict";

    Core.initLibrary({
        name: "demo.co",
        version: "1.0.0",
        dependencies: [
            "sap.ui.core",
            "sap.m"
        ],
        controls: [
            "demo.test.controls.ApproveButton",
            "demo.test.controls.RiskIndicator",
            "demo.test.controls.RequisitionCard"
        ],
        noLibraryCSS: false
    });

    return demo.co;
});