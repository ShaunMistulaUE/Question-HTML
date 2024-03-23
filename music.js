const audioElement = document.getElementById("player");

function playAudio() {
  audioElement.play();
}

function pauseAudio() {
  audioElement.pause();
}

const playlist = [
  {
    title: "Alam mo na.. Di ba?",
    artist:"someone",
    src: "audio/Alam Mo Na... Di Ba.mp3",
    imagePath: "images/test1.jpg"
  },
  {
    title: "gusto kita",
    artist:"someone",
    src: "audio/Alam Mo Na... Di Ba.mp3",
    imagePath: "path/to/song1.jpg"
  },
  {
    title: "Matagal ko na gusto tanongin",
    artist:"someone",
    src: "path/to/song2.mp3",
    imagePath: "path/to/song1.jpg"
  },
  {
    title: "kung pwede ba ",
    artist:"someone",
    src: "path/to/song2.mp3",
    imagePath: "path/to/song1.jpg"
  },
  {
    title: "Song 2",
    artist:"someone",
    src: "path/to/song2.mp3",
    imagePath: "path/to/song1.jpg"
  },
  {
    title: "Song 2",
    artist:"someone",
    src: "path/to/song2.mp3",
    imagePath: "path/to/song1.jpg"
  },
  // Add more songs as needed
];

// Get references to the song list and audio player elements
const songList = document.getElementById("song-list");
const player = document.getElementById("player");
const albumCover = document.getElementById("album-cover");
const toggleAutoplayButton = document.getElementById("toggleAutoplay");

// Function to create a list item for each song
function createSongListItem(song) {
    const listItem = document.createElement("li");
    const songContainer = document.createElement("div"); // Container for title and artist
    songContainer.classList.add("song-container"); // Add a class for styling (optional)
    listItem.appendChild(songContainer);
  
    const songTitle = document.createElement("span");
    songTitle.textContent = song.title;
    songContainer.appendChild(songTitle);
  
    const artistSpan = document.createElement("span");
    artistSpan.classList.add("artist"); // Add a class for styling (optional)
    artistSpan.textContent = song.artist;
    songContainer.appendChild(artistSpan);
  
    listItem.addEventListener("click", function() {
      player.src = song.src;
      player.play();
      albumCover.src = song.imagePath; // Update album cover image path
      highlightSong(listItem); // Highlight the selected song

      listItem.addEventListener("mouseover", function() {
        listItem.classList.add("hover");
      });
    
      listItem.addEventListener("mouseout", function() {
        listItem.classList.remove("hover");
      });
    });
    return listItem;
}
// Populate the song list with list items
playlist.forEach(song => {
  const listItem = createSongListItem(song);
  songList.appendChild(listItem);});

  function toggleAutoplay() {
    if (player.muted) {
      player.muted = false;
    } else {
      player.muted = true;
    }
    player.autoplay = !player.autoplay;
    toggleAutoplayButton.textContent = player.autoplay ? "Mute Autoplay" : "Enable Autoplay";
    if (player.autoplay) {
      highlightSong(songList.firstChild); // Highlight the first song on autoplay
    } else {
      // Optionally clear song highlight when autoplay is disabled
    }
  }
  
  // Add event listener to the toggle button
  toggleAutoplayButton.addEventListener("click", toggleAutoplay);
  
  function playNextSong() {
    let currentSongIndex = playlist.findIndex(song => song.src === player.src);
    if (currentSongIndex !== -1) {
      const nextSongIndex = (currentSongIndex + 1) % playlist.length;
      player.src = playlist[nextSongIndex].src;
      player.play();
    }
  }
  
  // Event listener for 'ended' event on the player
  player.addEventListener("ended", playNextSong);
  
  // Event listener for 'seeked' event on the player
  player.addEventListener("seeked", function() {
    // Check if user seeks to the end of the current song
    if (player.currentTime === player.duration) {
      playNextSong();
    }
  });
    // Initial mute state (autoplay starts muted)
    player.src = playlist[0].src; // Set the source of the first song
    player.play(); // Play muted audio


