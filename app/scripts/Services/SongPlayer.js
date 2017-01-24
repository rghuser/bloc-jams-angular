//Register a  SongPlayer service using the Factory recipe:

 (function() {
     function SongPlayer() {
          var SongPlayer = {};
		 
//Add a play method to the SongPlayer service so that we can play a song:
		 
		 
		 SongPlayer.play = function(song) {
         var currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
         });
 
         currentBuzzObject.play();    
     };
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();