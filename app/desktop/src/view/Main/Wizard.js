//wizard - deals with creating new customer
Ext.define('App.view.person.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'personwizard',
        'personcreate',
        'personedit'
    ],

    controller: {
        type: 'personwizard'
    },

    viewModel: {
        type: 'personwizard'
    },

    bind: {
        title: '{record.phantom? "Skapa" : "Editera"} Kund'
    },

    cls: 'person-create',

    screens: [{
        iconCls: 'x-fa fa-info',
        items: [{
            xtype: 'textfield',
            reference: 'firstname',
            label: 'Förnamn',
            required: false,
            bind: '{record.firstname}',
        }, 
        {
            xtype: 'textfield',
            reference: 'lastname',
            label: 'Efternamn',
            required: false,
            bind: '{record.lastname}',
        }, 
        {
            xtype: 'combobox',
            reference: 'organization',
            valueField: 'name',
            displayField: 'name',
            placeholder: 'Organisation',
            queryMode: 'local',
            store: { type: "organizations" },
            bind: '{record.organization}',
            weight: 0,
        },
        {
            xtype: 'textfield',
            reference: 'email',
            label: 'Email',
            required: false,
            bind: '{record.email}',
        },
        {
            xtype: 'textfield',
            reference: 'phone',
            label: 'Telefon',
            required: false,
            bind: '{record.phone}',
        },  
    ]
    }]
});
