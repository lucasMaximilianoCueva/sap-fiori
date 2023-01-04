/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ListaFacturas/facturas/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
