//Mainview that displays customers
Ext.define("MainView", {
  extend: "Ext.grid.Grid",
  xtype: "mainview",
  cls: "mainview",
  store: { type: "customers" },
  controller: "browsecontroller",
  viewModel: "mainviewmodel",
  requires: ["Ext.grid.rowedit.Plugin"],
  fields: {
    search_firstname: {
      property: "firstname",
      defaultValue: null
    },
    search_lastname: {
      property: "lastname",
      defaultValue: null
    },
    search_organizations: {
      property: "organization",
      defaultValue: null
    }
  },

  requires: ["Ext.plugin.ListPaging"],
  groupFooter: {
    xtype: "gridsummaryrow"
  },
  plugins: {
    rowedit: {
      autoConfirm: false
    }
  },
  listeners: {
    itemtap: "editCustomer"
  },
  columns: [
    {
      sortable: true,
      text: "Id",
      dataIndex: "id"
    },
    {
      type: "{firstname}",
      sortable: true,
      text: "Förnamn",
      dataIndex: "firstname",
      flex: 1
    },
    {
      type: "{lastname}",
      sortable: true,
      text: "Efternamn",
      dataIndex: "lastname",
      flex: 1
    },
    {
      sortable: true,
      text: "Organisation",
      dataIndex: "organization",
      flex: 1
    },
    {
      sortable: true,
      dataIndex: "email",
      text: "Email",
      flex: 1
    },
    {
      sortable: true,
      dataIndex: "phone",
      text: "Telefon",
      flex: 1
    },
    {
      sortable: true,
      dataIndex: "created",
      text: "Skapad",
      flex: 1
    }
  ]
});
