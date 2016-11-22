(function(window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  var sciTruck = new Truck('USCSS Nostromo', new DataStore());
  myTruck.createOrder({ emailAddress: 'gary@aol.com', coffee: 'latte'});
  myTruck.createOrder({ emailAddress: 'poo@aohell.com', coffee: 'Hammerhead'});
  myTruck.createOrder({ emailAddress: 'fritz@aol.com', coffee: 'Americano'});
  sciTruck.createOrder({ emailAddress: 'picard@aol.com', coffee: 'Earl Gray, HOT'});
  sciTruck.createOrder({ emailAddress: 'ripley@aol.com', coffee: 'Acid spit'});
  window.myTruck = myTruck;
  window.sciTruck = sciTruck;

})(window);
