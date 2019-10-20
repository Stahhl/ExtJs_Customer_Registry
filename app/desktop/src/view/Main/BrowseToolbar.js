//Handles search filters
//Aswell as toolbar buttons
Ext.define('BrowseToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'personbrowsetoolbar',

    cls: 'browse-toolbar',
    weighted: true,
    ui: 'tools',

    defaults: {
        ui: 'action'
    },

    items: {
        search_firstname: {
            xtype: 'searchfield',
            reference: 'search_firstname',
            placeholder: 'Alla Förnamn',
            userCls: 'expandable',
            bind: '{filters.search_firstname}',
            weight: 0,
        },
        search_lastname: {
            xtype: 'searchfield',
            reference: 'search_lastname',
            placeholder: 'Alla Efternamn',
            userCls: 'expandable',
            bind: '{filters.search_lastname}',
            weight: 0
        },
        organizations: {
            xtype: 'combobox',
            valueField: 'name',
            displayField: 'name',
            placeholder: 'Alla organisationer',
            queryMode: 'local',
            store: { type: "organizations" },
            bind: '{filters.search_organizations}',
            weight: 0,
        },
        clear: {
            iconCls: 'x-fa fa-times',
            handler: 'onClearFiltersTap',
            tooltip: 'Clear Filters',
            weight: 0
        },
        create: {
            xtype: 'button',
            text: 'Lägg till ny kund',
            tooltip: 'Create',
            iconCls: 'x-fa fa-plus',
            handler: 'onCreate',
            weight: 0
        },
    }
});
