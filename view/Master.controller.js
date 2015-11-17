jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
jQuery.sap.require("sap.m.TablePersoController");

sap.ui.core.mvc.Controller.extend("teched.poweron.view.Master", {
	_oCatalog: null,
	_oResourceBundle: null,

	onInit: function() {},

	onNavBack: function() {
		window.history.go(-1);
	},

	main_page_nav: function(oevent) {

		var choosenFeature = oevent.getSource().getId();

		switch (choosenFeature) {
			case this.getView().createId("monitor"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Monitor");
				break;

			case this.getView().createId("repair"):
				var notification = window.Notification || window.mozNotification || window.webkitNotification;
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Notify");

				// The user needs to allow this
				if ('undefined' === typeof notification) {
					alert('Web notification not supported');
				} else {
					notification.requestPermission(function(permission) {});
					var noty = new notification(
						"Alert Message Received!!!!", {
							body: "Please assign a skilled crew to be ready to deal with this possible outages",
							dir: 'auto', // or ltr, rtl
							lang: 'EN', //lang used within the notification.
							tag: 'notificationPopup', //An element ID to get/set the content
							icon: './img/logo.png' //The URL of an image to be used as an icon
						}
					);
					noty.onclick = function() {
						console.log('notification.Click');
					};
					noty.onerror = function() {
						console.log('notification.Error');
					};
					noty.onshow = function() {
						console.log('notification.Show');
					};
					noty.onclose = function() {
						console.log('notification.Close');
					};
				}
				break;
			case this.getView().createId("list"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Master_list");
				break;

			default:
				sap.ui.core.UIComponent.getRouterFor(this).navTo("CoursePage");

		}

		//sap.ui.core.UIComponent.getRouterFor(this).navTo("OverallView");
	}

});