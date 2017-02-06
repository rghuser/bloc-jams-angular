 (function() {
     function CollectionCtrl(Fixtures) {
		 this.albums = Fixtures.getCollection(12);
     };
 
     angular
         .module('blocJams')
	 //Inject the Fixtures service into CollectionCtrl.
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();