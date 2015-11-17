sap.ui.controller("teched.poweron.view.Master_list", {
	_oCatalog: null,
	_oResourceBundle: null,

	onInit: function() {
	
	var model = new sap.ui.model.json.JSONModel();
		model.loadData("./products.json", false);
		this.getView().setModel(model);
    
	},

	onNavBack: function() {
		window.history.go(-1);
	}

});