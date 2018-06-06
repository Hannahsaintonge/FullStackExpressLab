"use strict";
 
const cart = {

    template: `
    <h1> A List Of Things I can't Afford</h1>
    <section ng-repeat="item in $ctrl.items">
     <input ng-blur="$ctrl.updateItem(item)" ng-model="item.product">
     <input ng-blur="$ctrl.updateItem(item)" ng-model="item.price">
     <input ng-blur="$ctrl.updateItem(item)" ng-model="item.quantity">
     <a href="" ng-click="$ctrl.deleteItem(item.id);">Delete</a>
   </section>


    <form ng-submit="$ctrl.addItem($ctrl.newItem);">
      <input type="text" placeholder="Item" ng-model="$ctrl.updateItem.product">
      <input type="text" placeholder="Price" ng-model="$ctrl.updateItem.price">
      <input type="text" placeholder="Quantity" ng-model="$ctrl.updateItem.quanity">
      <button>Add Item</button>
  </form>
    `,

    controller: ["CartService", function(CartService) {
      const vm = this;

      CartService.getAllItems().then((response) => {
        vm.items = response.data;
      });

    //   vm.getItems = () => {
    //       CartService.getAllItems().then((response) => {
    //         vm.tems = response.data;
    //       });
    //   };

      vm.addItem = (newItem) => {
        CartService.addItem(newItem).then((response) => {
          vm.items = response.data;
        });
        vm.newItem = {};
      };

      vm.deleteItem = (id) => {
        CartService.deleteItem(id).then((response) => {
          vm.items = response.data;
        });
      };

      vm.updateItem = (item) => {
        CartService.updateItem(item).then((response) => {
          vm.items = response.data;
        });
      };

    }]

};

angular
  .module("app")
  .component("cart", cart);