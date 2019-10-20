//wizard - deals with creating new customer
Ext.define("App.view.person.WizardController", {
  extend: "App.view.widgets.WizardController",
  alias: "controller.personwizard",

  control: {
    "#": {
      reset: "refresh"
    }
  },

  refresh: function() {
    console.log("wizardcontroller - refresh");
    var vm = this.getViewModel();
    vm.getStore("offices").reload();
    vm.getStore("organizations").reload();
  },
});
