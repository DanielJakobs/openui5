sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
		function(Controller, MessageToast) {
		"use strict";

		var PageController = Controller.extend("sap.m.sample.NewsContent.Page", {
			press : function(evt) {
				MessageToast.show("The news content is pressed.");
			}
		});

		return PageController;
	});