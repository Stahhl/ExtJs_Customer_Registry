Ext.define("App.view.widgets.WizardController", {
  extend: "Ext.app.ViewController",
  alias: "controller.wizard",
  store: "customers",

  requires: ["Ext.History"],

  getItemCount: function(tabs) {
    console.log("getItemCount");
    return tabs.getInnerItems().length;
  },

  getActiveIndex: function(tabs) {
    console.log("getActiveIndex");

    return tabs.getInnerItems().indexOf(tabs.getActiveItem());
  },

  advance: function(increment) {
    console.log("advance");

    var me = this,
      tabs = me.lookup("tabs"),
      index = me.getActiveIndex(tabs),
      count = me.getItemCount(tabs),
      next = index + increment;

    tabs.setActiveItem(Math.max(0, Math.min(count - 1, next)));
  },

  resync: function() {
    console.log("resync");

    var me = this,
      tabs = me.lookup("tabs"),
      count = me.getItemCount(tabs),
      single = count < 2;

    tabs.getTabBar().setHidden(single);
  },

  finalize: function() {
    console.log("finalize");

    var view = this.getView();
    if (view.getFloated()) {
      view.close();
    } else {
      Ext.History.back();
    }
  },
  onDeleteTap: function() {
    //user pressed button to delete a customer
    console.log("onDeleteTap");

    var me = this,
      record = me.getViewModel().get("record"),
      data = record.data;

    var store = Ext.getStore("customersx");

    //kontroll för att se om användaren verkligen vill ta bort kunden
    Ext.Msg.confirm("Ta bort", "Vill du ta bort kunden?", function(button) {
      if (button == "yes") {
        store.remove(record);
      }
    });

    me.finalize();
  },

  onSubmitTap: function() {
    //user pressed button to add a new customer
    console.log("onSubmitTap");
    var me = this,
      record = me.getViewModel().get("record"),
      data = record.data;

    console.log(record.phantom);
    if (record.phantom == false) {
      me.submitEdit();
      return;
    }

    var store = Ext.getStore("customersx");
    var count = store.data.items.length + 1;
    var date = Ext.Date.format(new Date(), "Y-m-d");

    store.add({
      id: count,
      firstname: data.firstname,
      lastname: data.lastname,
      organization: data.organization,
      email: data.email,
      phone: data.phone,
      created: date
    });

    me.finalize();
  },
  submitEdit: function() {
    //user pressed the button to edit an existing customer
    console.log("submitEdit");

    var me = this,
      record = me.getViewModel().get("record"),
      data = record.data;

    var store = Ext.getStore("customersx");

    store.save(record);

    me.finalize();
  },
  onCancelTap: function() {
    console.log("onCancelTap");

    this.finalize();
  },

  onScreenAdd: function() {
    console.log("onScreenAdd");

    this.resync();
  },

  onScreenRemove: function(tabs) {
    console.log("onScreenRemove");

    if (!tabs.destroying) {
      this.resync();
    }
  },

  onScreenActivate: function(tabs) {
    console.log("onScreenActivate");

    // This event is triggered when the view is being destroyed!
    if (!tabs.destroying) {
      this.resync();
    }
  }
});
