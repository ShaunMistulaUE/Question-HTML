
// Get references to the song list and elements
const songList = document.getElementById("song-list");
const player = document.getElementById("player");
const albumCover = document.getElementById("album-cover");
const toggleAutoplayButton = document.getElementById("toggleAutoplay");
let ctrlIcon = document.getElementById("ctrlIcon")

player.onloadedmetadata = function(){
  progressBar.max = player.duration;
  progressBar.value = player.currentTime;
}

function playPauseFunc(){
  if(ctrlIcon.classList.contains("fa-pause")){
    player.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
  else{
    player.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if(player.play()){
  setInterval(()=>{
    progressBar.value = player.currentTime
  }, 100)
}

const playlist = [
  {
    title: "Song One",
    artist: "Artist One",
    src: "audio/Alam Mo Na... Di Ba.mp3",
    imagePath: "images/test1.jpg"
  },
  {
    title: "Gusto 'kita'",
    artist: "Zack Tabudlo",
    src: "audio/GUSTO - ZACK TABUDLO.mp3",
    imagePath: "images/albumC2.jpg"
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "path/to/song2.mp3",
    imagePath: "path/to/song1.jpg"
  },
  // ... more songs in the playlist
];



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

      // Remove the "playing" class from all list items
    const allListItems = document.querySelectorAll(".song-list li");
    allListItems.forEach(item => item.classList.remove("playing"));

    // Add the "playing" class to the clicked item
    listItem.classList.add("playing");
  });

  listItem.addEventListener("mouseover", function() {
    listItem.classList.add("hover");
  });

  listItem.addEventListener("mouseout", function() {
    listItem.classList.remove("hover");
  });

  return listItem;
}

// Populate the song list with list items
playlist.forEach(song => {
  const listItem = createSongListItem(song);
  songList.appendChild(listItem);
});

// Function to play all songs and update album cover on song change
function playAllSongs() {
  let currentSongIndex = 0; // Start from the first song

  player.addEventListener("ended", function() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length; // Wrap around if needed
    if (currentSongIndex < playlist.length) { // Check if all songs played
      player.src = playlist[currentSongIndex].src;
      player.play();
      albumCover.src = playlist[currentSongIndex].imagePath; // Update album cover
    }
  });

  // Start playback of the first song (optional play button not included)
  player.src = playlist[currentSongIndex].src;
  player.play();
}

// Event listener for 'seeked' event on the player
player.addEventListener("seeked", function() {
  // Check if user seeks to the end of the current song
  if (player.currentTime === player.duration) {
    playNextSong();
  }
});

// Optional event listener for play button (modify as needed)
playButton.addEventListener("click", function() {
  // Potentially start playback muted for a better user experience
  player.muted = true; // Uncomment this line if desired
  player.src = playlist[0].src; // Set source of the first song
  player.play();
  // Unmute after a short delay (optional)
  setTimeout(() => { player.muted = false; }, 0); // Unmute after 0.5 seconds
});

// Initial mute state (autoplay starts muted, optional)
player.src = playlist[0].src; // Set the source of the first song
    player.play(); // Play muted audio
    playAllSongs();

