 (function() {
	 //Inject the Fixtures service into CollectionCtrl.
     function CollectionCtrl(Fixtures) {
	 //Update CollectionCtrl to use the Fixtures service's getCollection() method:
		 this.albums = Fixtures.getCollection(12);
     };
 
     angular
         .module('blocJams')
	 //Inject the Fixtures service into CollectionCtrl.
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();