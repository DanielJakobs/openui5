/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/test/Opa5",
    "sap/ui/test/matchers/Properties",
	"sap/ui/test/matchers/Ancestor",
	"sap/ui/test/matchers/Descendant"
], function(
	Opa5,
    Properties,
    Ancestor,
    Descendant
) {
	"use strict";

	return function waitForPanelInP13n(sGroupName, oSettings) {
		return this.waitFor({
            controlType: oSettings.modal ? "sap.m.Dialog" : "sap.m.ResponsivePopover",
            success: function(aPopovers) {
                var oPopover = aPopovers[0];
                Opa5.assert.ok(oPopover,"P13n Container found");
                this.waitFor({
                    controlType: "sap.m.Label",
                    matchers: [
                            new Properties({
                            text: sGroupName
                        }),
                        new Ancestor(oPopover)
                    ],
                    success: function(aLabels){
                        this.waitFor({
                            controlType: "sap.m.Panel",
                            matchers: new Descendant(aLabels[0]),

                            success: function(aPanels) {
                                if (typeof oSettings.success === "function") {
                                    oSettings.success.call(this, aPanels[0]);
                                }
                            }
                        });
                    }
                });
            }
        });
    };


});
