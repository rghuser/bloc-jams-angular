//Register a  SongPlayer service using the Factory recipe:

 (function() {
     function SongPlayer() {
          var SongPlayer = {};
		 
          var currentSong = null;
          var currentBuzzObject = null;
		 
//Add a play method to the SongPlayer service so that we can play a song:
		  
		 SongPlayer.play = function(song) {
			 if (currentSong !== song) {
                 if (currentBuzzObject) {
                     currentBuzzObject.stop();
					 currentSong.playing = null;
		     }
				 
             var currentBuzzObject = new buzz.sound(song.audioUrl, {
                     formats: ['mp3'],
                     preload: true
             });
				 
		 SongPlayer.pause = function(song) {
             currentBuzzObject.pause();
             song.playing = false;
         };
				 
                 currentSong = song;				 
 
                 currentBuzzObject.play();
			     song.playing = true;
			 }
       };
		 
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();