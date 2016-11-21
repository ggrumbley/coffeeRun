(function(window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  var sciTruck = new Truck('USCSS Nostromo', new DataStore());
  window.myTruck = myTruck;
})(window);
