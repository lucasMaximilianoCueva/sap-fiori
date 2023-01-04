/*global QUnit*/

sap.ui.define([
	"ListaFacturas/facturas/controller/VistaPrincipal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VistaPrincipal Controller");

	QUnit.test("I should test the VistaPrincipal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
