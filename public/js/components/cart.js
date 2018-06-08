"use strict";
 
const items = {

    template: `

    <h1> A List Of Things I can't Afford</h1>

   <form ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input placeholder="Item" ng-model="$ctrl.newItem.product">
    <input placeholder="Price" ng-model="$ctrl.newItem.price">
    <input placeholder="Quantity" ng-model="$ctrl.newItem.quantity">
    <button>Add Item</button>
  </form>
    <div class ="items-section">
    <section class="items" ng-repeat="item in $ctrl.items">
    <h4>Item</h4>
     <input type="text" ng-blur="$ctrl.updateItem(item)" ng-model="item.product">
     <h4>Price</h4>
     <input type="text" ng-blur="$ctrl.updateItem(item)" ng-model="item.price">
     <h4>Quantity</h4>
     <input type="text" ng-blur="$ctrl.updateItem(item)" ng-model="item.quantity">
     <a class="delete-btn" href="" ng-click="$ctrl.deleteItem(item.id);">Delete</a>
   </section>
   </div>
    `,

    controller: ["CartService", function(CartService) {
      const vm = this;

      CartService.getAllItems().then((response) => {
        vm.items = response.data;
      });

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

      // vm.increaseItem = (item) => {
      //   item.quantity++;
      //   vm.updateItem(item);
      // };

      // vm.decreaseItem = (item) => {
      //   if (item.quantity > 0) {
      //     item.quantity--;
      //   };
      //   vm.decreaseItem(item);
      // };

    }]

};

angular
  .module("app")
  .component("items", items);