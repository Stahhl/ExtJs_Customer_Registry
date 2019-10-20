//Page loaded by app
//Controls layout
Ext.define('Layout', {
	extend: 'Ext.Container',
	xtype: 'layout',
	controller: {type: 'browsecontroller'},
	viewModel: {type: 'mainviewmodel'},
	layout: 'fit',
	items: [
		{ xtype: 'headerview',    reference: 'headerview', docked: "top"},
		{ xtype: 'personbrowsetoolbar',    reference: 'personbrowsetoolbar', docked: "top"},
		{ xtype: 'mainview',    reference: 'mainview',},
	]
});