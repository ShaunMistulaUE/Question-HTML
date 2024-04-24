
// Get references to the song list and elements
const songList = document.getElementById("song-list");
const player = document.getElementById("player");
const albumCover = document.getElementById("album-cover");
const toggleAutoplayButton = document.getElementById("toggleAutoplay");
let ctrlIcon = document.getElementById("ctrlIcon")
const playingTextHead = document.getElementById("playingText");

player.onloadedmetadata = function(){
  progressBar.max = player.duration;
  progressBar.value = player.currentTime;
}

function playPauseFunc(){
  if(ctrlIcon.classList.contains("fa-pause")){
    player.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    playingTextHead.textContent = "";
  }
  else{
    player.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    playingTextHead.textContent = "Now Playing";
  }
}

function playPFunc(){
  if(ctrlIcon.classList.contains("fa-play") || !player.pause){

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

function handleClick(element) {
  // Toggle the "clicked" class on the clicked element
  element.classList.toggle("clicked");
}

player.addEventListener("playing",function autoplayDt(){
  if(player.autoplay){
    if(ctrlIcon.classList.contains("fa-play")){
      ctrlIcon.classList.remove("fa-play");
      ctrlIcon.classList.add("fa-pause");
    }
  }
});




var isPlaying = true; // or false depending on your logic

    // Get the element by its id
    var playingText = document.getElementById("playingText");

    // Change the text content based on the value of isPlaying
    if (isPlaying) {
        playingText.textContent = "Now Playing";
    } else {
        playingText.textContent = "Not Playing";
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
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "path/to/song2.mp3",
    imagePath: "path/to/song1.jpg"
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

  // Event listener for when a song is clicked
  listItem.addEventListener("click", function() {
    // Set the source of the player to the selected song
    player.src = song.src;
    player.play();

    // Update the album cover with the selected song's image
    albumCover.src = song.imagePath;
    currentSongIndex = index;

    // Highlight the selected song
    highlightSong(listItem);

    // Remove the "playing" class from all list items
    const allListItems = document.querySelectorAll(".song-list li");
    allListItems.forEach(item => item.classList.remove("playing"));

    // Add the "playing" class to the clicked item
    listItem.classList.add("playing");
  });

  // Event listener for mouse hover effect (optional)
  listItem.addEventListener("mouseover", function() {
    listItem.classList.add("hover");
  });

  // Event listener for removing mouse hover effect (optional)
  listItem.addEventListener("mouseout", function() {
    listItem.classList.remove("hover");
  });

  return listItem;
}




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

  // Get reference to the progress bar
const progressBar = document.getElementById("progressBar");

// Event listener for when the progress bar value changes (dragging or clicking)
progressBar.addEventListener("input", function() {
  // Update the player's current time based on the progress bar value
  player.currentTime = progressBar.value;
});

// Event listener for when the user starts dragging the progress bar
progressBar.addEventListener("mousedown", function() {
  // Add event listener to handle mouse movement during dragging
  document.addEventListener("mousemove", handleProgressBarDrag);
});

// Event listener for when the user stops dragging the progress bar
document.addEventListener("mouseup", function() {
  // Remove event listener for mouse movement after dragging
  document.removeEventListener("mousemove", handleProgressBarDrag);
});

// Function to handle mouse movement during dragging
function handleProgressBarDrag(event) {
  // Calculate the new value of the progress bar based on mouse position
  const rect = progressBar.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const progressBarWidth = rect.right - rect.left;
  const progress = offsetX / progressBarWidth;
  const newValue = progress * progressBar.max;

  // Update the progress bar value and player's current time
  progressBar.value = newValue;
  player.currentTime = newValue;
}

  // Start playback of the first song (optional play button not included)
  player.src = playlist[currentSongIndex].src;
  player.play();
}

// Get references to time elements
const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");

// Function to format time in minutes and seconds
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Update current time and total time display
player.addEventListener("timeupdate", function() {
  currentTimeDisplay.textContent = formatTime(player.currentTime);
});

player.addEventListener("loadedmetadata", function() {
  totalTimeDisplay.textContent = formatTime(player.duration);
});


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

