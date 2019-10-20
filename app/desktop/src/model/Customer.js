Ext.define("App.model.Customer", {
  extend: "Ext.data.Model",

  fields: [
    { name: "id", type: "int" },
    { name: "firstname", type: "string" },
    { name: "lastname", type: "string" },
    { name: "organization", type: "string" },
    { name: "email", type: "string" },
    { name: "phone", type: "string" },
    { name: "created", type: "string" }
  ],
  proxy: {
    type: "memory",
    url: "customer",
    reader: {
      type: "json",
      rootProperty: "customers"
    }
  }
});
