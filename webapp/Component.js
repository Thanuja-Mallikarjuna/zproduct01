/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/ibm/zproduct01/zproduct01/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.ibm.zproduct01.zproduct01.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            createContent:function(){
                return new sap.ui.view({
                    viewName:"com.sapui5.zpurchasemd09.view.FlexibleColumnLayout",
                    type:"XML"
                })
            }
        });
    },true
);