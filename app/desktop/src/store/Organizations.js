//store for organizations
//contains hardcoded organizations
Ext.define('Organizations', {
    extend: 'Ext.data.Store',
    alias: 'store.organizations',
    // model: 'App.model.Customer',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'name',
    fields: [
        'name'
    ],
    // groupField: 'dept',
    data: { items: [
        { name: 'Starfleet' },
        { name: 'Justice League'},
        { name: 'Avengers'},
        { name: 'Greencon'},
        { name: 'League of Villans'},
        { name: 'Valbo FK'},
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
});
