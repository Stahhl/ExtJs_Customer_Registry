//Controller for viewing customers
Ext.define("BrowseController", {
  extend: "Ext.app.ViewController",
  alias: "controller.browsecontroller",

  control: {
    "#": {
      routechange: "onRouteChange",
      storechange: "onStoreChange"
    }
  },
  
  initViewModel: function(vm) {
    console.log("initViewModel");

    vm.bind(
      { bindTo: "{filters}", deep: true },
      Ext.Function.createBuffered(
        function() {
          if (!this.destroyed) {
            // The view might have been destroyed (e.g. user deauthentication)
            this.updateFilters();
          }
        },
        500,
        this,
        {}
      )
    );
  },
  //mainmethod to edit customer
  editCustomer: function(view, index, item, record) {
    console.log("editCustomer");

    Ext.create({
      xtype: "personedit",
      record: record,
      centered: true,
      floated: true,
      modal: true,
      ui: "dialog",
      toolbar: {
        docked: "bottom"
      }
    }).show();
  },
  //main method to add customer
  onCreate: function() {
    console.log("onCreate");
    
    Ext.create({
      xtype: "personcreate",
      record: Ext.create("App.model.Customer"),
      centered: true,
      floated: true,
      modal: true,
      ui: "dialog",
      toolbar: {
        docked: "bottom"
      }
    }).show();
  },
  //main method for search
  updateFilters: function(reload) {
    console.log("updateFilters");

    var view = this.getView(),
      store = view.getStore(),
      collection = store && store.getFilters(),
      filters = this.getViewModel().get("filters"),
      fields = view.fields,
      dirty = !!reload,
      item,
      value;

    if (!collection) {
      return;
    }

    Ext.Object.each(fields, function(key, field) {
      value = filters[key];
      if (value && value.isModel) {
        value = value.get("value");
      }

      key = field.property || key;
      item = collection.get(key);
      if ((item && item.getValue()) == value) {
        return;
      }

      dirty = true;
      if (value == null) {
        store.removeFilter(key, true);
      } else {
        console.log("filter: ", key, " ", value);

        store.filter(key, value, true);
      }
    });

    if (dirty) {
      //   console.log("5");

      store.removeAll();
      store.load();
    }
  },

  onRouteChange: function(view, route) {
    console.log("onRouteChange");

    var me = this,
      vm = me.getViewModel(),
      regex = /([^\/]+)\/([^\/]+)/g,
      fields = me.getView().getFields() || {},
      filters = {},
      field,
      value;

    Ext.Object.each(fields, function(key, value) {
      filters[key] = value.defaultValue || null;
    });

    while ((match = regex.exec(route))) {
      field = match[1];
      value = match[2];
      if (Ext.isDefined(filters[field])) {
        filters[field] =
          field !== "search"
            ? Ext.create(App.model.Filter, { value: value })
            : value;
      }
    }

    vm.set("filters", filters);
    me.updateFilters();
  },

  onStoreChange: function() {
    console.log("onStoreChange");

    this.updateFilters(true);
  },

  onChildActivate: function(dataview, location) {
    console.log("onChildActivate");

    var record = location.record;
    if (record) {
      this.redirectTo(record);
    }
  },

  onEditAction: function(list, data) {
    console.log("onEditAction");

    this.redirectTo(data.record.toEditUrl());
  },

  onRefreshTap: function() {
    console.log("onRefreshTap");

    var store = this.getView().getStore();
    if (store) {
      store.reload();
    }
  },

  onClearFiltersTap: function() {
    console.log("onClearFiltersTap");

    this.getViewModel().set("filters", {});
  }
});
