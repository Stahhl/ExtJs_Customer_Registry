//Store for customers
//start with hardcoded customers
Ext.define("Customers", {
  extend: "Ext.data.Store",
  alias: "store.customers",
  storeId: 'customersx',
  // xtype: "customer",
  // model: 'App.model.Customer',
  remoteFilter: true,
  remoteSort: true,
  sorters: "id",
  fields: [
    "id",
    "firstname",
    "lastname",
    "organization",
    "email",
    "phone",
    "created"
  ],
  // groupField: 'dept',
  data: {
    items: [
      {
        id: "1",
        firstname: "Jean Luc",
        lastname: "Picard",
        organization: "Starfleet",
        email: "jeanluc.picard@enterprise2.sf",
        phone: "555-777-777",
        created: "2019-10-19"
      },
      {
        id: "2",
        firstname: "James T",
        lastname: "Kirk",
        organization: "Starfleet",
        email: "j.kirk@enterprise1.sf",
        phone: "111-222-333",
        created: "2019-10-19"
      },
      {
        id: "3",
        firstname: "Bruce",
        lastname: "Wayne",
        organization: "Justice League",
        email: "b.waynek@notbatman.batman",
        phone: "666-666-666",
        created: "2019-10-18"
      },
      {
        id: "4",
        firstname: "Dr",
        lastname: "Doom",
        organization: "League of Villans",
        email: "dr.doom@king.latveria",
        phone: "111-111-111",
        created: "2019-10-18"
      },
      {
        id: "5",
        firstname: "Vladimir",
        lastname: "Putin",
        organization: "Valbo FK",
        email: "v.putin@valbofk.ru",
        phone: "999-666-444",
        created: "2019-10-18"
      },
    ]
  },
  proxy: {
    autoLoad: true,
    autoSync: true,
    // model: "App.model.Customer",
    type: "memory", //dont change
    reader: {
      type: "json",
      rootProperty: "items"
    }
  }
});
