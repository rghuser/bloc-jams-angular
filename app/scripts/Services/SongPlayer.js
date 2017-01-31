 (function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
		 
		//  ___     _          _           _  _   _       _ _         _
        // | _ \_ _(_)_ ____ _| |_ ___    /_\| |_| |_ _ _(_) |__ _  _| |_ ___ ___
        // |  _/ '_| \ V / _` |  _/ -_)  / _ \  _|  _| '_| | '_ \ || |  _/ -_|_-<
        // |_| |_| |_|\_/\__,_|\__\___| /_/ \_\__|\__|_| |_|_.__/\_,_|\__\___/__/

		/**
        * @desc Information for current album
        * @type {Object}
        */ 
		var currentAlbum = Fixtures.getAlbum();
		/**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
		 	 
        //  ___     _          _          __              _   _
        // | _ \_ _(_)_ ____ _| |_ ___   / _|_  _ _ _  __| |_(_)___ _ _  ___
        // |  _/ '_| \ V / _` |  _/ -_) |  _| || | ' \/ _|  _| / _ \ ' \(_-<
        // |_| |_| |_|\_/\__,_|\__\___| |_|  \_,_|_||_\__|\__|_\___/_||_/__/
		 
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */		 	 
        var setSong = function(song) {
            if (currentBuzzObject) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
            }
 
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            SongPlayer.currentSong = song;
          };
        /**
        * @function playSong
        * @desc Play a song
        * @param {Object} song
        */	
        var playSong = function(song){
	        currentBuzzObject.play();
	        song.playing = true;
        }; 			  
        /**
        * @function stopSong
        * @desc Stop a song
        * @param {Object} song
        */	
        var stopSong = function(song){
	        currentBuzzObject.stop();
	        song.playing = null;
        };
		/**
        * @function getSongIndex
        * @desc Get index of song in the songs array
        * @param {Object} song
        * @returns {Number}
        */	 
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
		 
        //  ___      _    _ _        _  _   _       _ _         _
        // | _ \_  _| |__| (_)__    /_\| |_| |_ _ _(_) |__ _  _| |_ ___ ___
        // |  _/ || | '_ \ | / _|  / _ \  _|  _| '_| | '_ \ || |  _/ -_|_-<
        // |_|  \_,_|_.__/_|_\__| /_/ \_\__|\__|_| |_|_.__/\_,_|\__\___/__/

        /**
        * @desc Active song object from list of songs
        * @type {Object}
        */
		 SongPlayer.currentSong = null;
		 
        //  ___      _    _ _      __  __     _   _            _
        // | _ \_  _| |__| (_)__  |  \/  |___| |_| |_  ___  __| |___
        // |  _/ || | '_ \ | / _| | |\/| / -_)  _| ' \/ _ \/ _` (_-<
        // |_|  \_,_|_.__/_|_\__| |_|  |_\___|\__|_||_\___/\__,_/__/
  
		/**
        * @function play
        * @desc Play current or new song
        * @param {Object} song
        */	
		 
		 SongPlayer.play = function(song) {
			 song = song || SongPlayer.currentSong;
			 if (SongPlayer.currentSong !== song) {
			     setSong(song);
				 playSong(song);   
              } else if (SongPlayer.currentSong === song) {
                  if (currentBuzzObject.isPaused()) {
                      playSong(song);
                  }
              }              
           };		
         /**
         * @function pause
         * @desc Pause current song
         * @param {Object} song
         */
		  SongPlayer.pause = function(song) {
			  song = song || SongPlayer.currentSong;
              currentBuzzObject.pause();
              song.playing = false;
      };
	    /**
        * @function previous
        * @desc Set song to previous song in album
        */
		  SongPlayer.previous = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex--;
			  
			  if (currentSongIndex < 0) {
              currentBuzzObject.stop();
              SongPlayer.currentSong.playing = null;
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }
      }; 
	    /**
        * @function next
        * @desc Set song to next song in album
        */
		  SongPlayer.next = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex++;
		  
		      if (currentSongIndex < 0) {
              currentBuzzObject.stop();
              SongPlayer.currentSong.playing = null;
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }
      }; 
		 
	      return SongPlayer;
   };
		 		 
      angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();

