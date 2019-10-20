//wizard - deals with creating new customer
Ext.define('App.view.widgets.Wizard', {
    extend: 'Ext.form.Panel',

    controller: {
        type: 'wizard'
    },

    viewModel: {
        data: {
            record: null
        }
    },

    config: {
        screens: [],

        toolbar: {
            xtype: 'toolbar',
            weighted: true,
            ui: 'tools',

            defaults: {
                ui: 'flat'
            },
        }
    },

    platformConfig: {
        //phone stuff is remnant from old code
        phone: {
            header: {
                items: {
                    submit: {
                        xtype: 'button',
                        handler: 'onSubmitTap',
                        iconCls: 'x-fa fa-save',
                        weight: 10
                    }
                }
            },

            toolbar: {
                docked: 'bottom',
                layout: {
                    pack: 'end'
                }
            }
        },

        '!phone': {
            header: {
                userCls: 'page-constrained',
            },

            toolbar: {
                userCls: 'page-constrained',
                docked: 'top',
                items: {
                    spacer: {
                        xtype: 'spacer',
                        weight: 10
                    },
                    delete: {
                        reference: 'delete',
                        handler: 'onDeleteTap',
                        weight: 20,
                        ui: 'action',
                        docked: "left",
                        bind: {
                            hidden: '{record.phantom}',
                            text: 'Ta bort'
                        }
                    },
                    submit: {
                        reference: 'submit',
                        handler: 'onSubmitTap',
                        weight: 20,
                        ui: 'action',
                        docked: "right",
                        bind: {
                            text: '{record.phantom? "Skapa" : "Spara"}'
                        }
                    },

                    cancel: {
                        reference: 'cancel',
                        handler: 'onCancelTap',
                        text: 'Avbryt',
                        weight: 30,
                        ui: 'action',
                        docked: "right",
                    }
                }
            }
        }
    },

    modelValidation: true,
    layout: 'fit',
    height: 512,
    width: 512,

    bind: {
        iconCls: 'x-fa fa-{record.phantom? "plus" : "pencil"}'
    },

    items: [{
        xtype: 'tabpanel',
        reference: 'tabs',

        layout: {
            deferRender: false
        },

        defaults: {
            userCls: 'wizard-screen',
            scrollable: 'y',
            padding: 15,
            tab: {
                iconAlign: 'top'
            }
        },

        tabBar: {
            defaultTabUI: 'flat',
            ui: 'flat',
            layout: {
                pack: 'center'
            }
        },

        listeners: {
            add: 'onScreenAdd',
            remove: 'onScreenRemove',
            activeitemchange: 'onScreenActivate'
        }
    }],

    initialize: function() {
        console.log("initialize");
        var me = this;
        me.callParent();
        me.add(me.getToolbar());
        me.lookup('tabs').add(me.getScreens());
    },

    reset: function() {
        console.log("reset");

        var me = this;
        me.callParent();
        me.fireEvent('reset');
        return me;
    },

    setRecord: function(record) {
        console.log("setRecord");

        this.getViewModel().set('record', record);
    }
});
