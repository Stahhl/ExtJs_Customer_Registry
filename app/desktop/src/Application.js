Ext.define("Customer_Registry.Application", {
  extend: "Ext.app.Application",
  name: "Customer_Registry",
  requires: ["Customer_Registry.*"],

  launch: function() {
    Ext.Viewport.add([{ xtype: "layout" }]);
  },

  onAppUpdate: function() {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function(choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  }
});
