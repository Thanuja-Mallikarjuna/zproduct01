/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comibmzproduct01/zproduct01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
