sap.ui.controller("teched.poweron.view.Monitor", {

onInit: function() {
	var model = new sap.ui.model.json.JSONModel();
		model.loadData("./map.json", false);
		this.getView().setModel(model);
},


	onNavBack: function() {
		window.history.go(-1);
	},

onContextMenuItem: function(evt) {
	alert("onContextMenu");
},

onChartpress: function(evt) {
	//sap.m.MessageToast.show("The chart was pressed.");
	//sap.m.MessageToast.show("The chart was pressed:" + evt.getSource().getId());
	
	sap.ui.core.UIComponent.getRouterFor(this).navTo("Notify");
	// create popover
			if (! this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("/popover", this);
				this.getView().addDependent(this._oPopover);
				//this._oPopover.bindElement("/ProductCollection/0");
			}
},

onImagePress: function(evt) {
	sap.m.MessageToast.show("The image was pressed");
},

press: function(evt) {
	sap.m.MessageToast.show("Something was pressed");
}
});