// ============ COMPLETE SONG DATABASE ============

// Helper function to clean filenames for matching
function getFileFromTitle(artist, title) {
    // Your files are named exactly like: "Artist - Title.mp3"
    return `audio/${artist.toLowerCase()}/${artist} - ${title}.mp3`;
}

// $UICIDEBOY$ PLAYLIST
const suicideboysSongs = [
    { title: "1000 Blunts", artist: "$uicideboy$", duration: 165 },
    { title: "All Dogs Go to Heaven", artist: "$uicideboy$", duration: 168 },
    { title: "Ashes of Luxury", artist: "$uicideboy$", duration: 142 },
    { title: "Bizarro", artist: "$uicideboy$", duration: 145 },
    { title: "Fucking Your Culture", artist: "$uicideboy$", duration: 158 },
    { title: "I Dream of Chrome", artist: "$uicideboy$", duration: 162 },
    { title: "I Wanna Be Romanticized", artist: "$uicideboy$", duration: 148 },
    { title: "In Constant Sorrow", artist: "$uicideboy$", duration: 175 },
    { title: "Jeffer Drive", artist: "$uicideboy$", duration: 148 },
    { title: "Leave Your Things Behind II", artist: "$uicideboy$", duration: 146 },
    { title: "Low Key", artist: "$uicideboy$", duration: 138 },
];
// JAZEEK PLAYLIST
const jazeekSongs = [
    { title: "112", artist: "Jazeek", duration: 168 },
    { title: "AKON", artist: "Jazeek", duration: 176 },
    { title: "Amsterdam", artist: "Jazeek", duration: 171 },
    { title: "Bad Ting", artist: "Jazeek", duration: 172 },
    { title: "Baile Funk im Blut", artist: "Jazeek", duration: 178 },
    { title: "Bend Over", artist: "Jazeek", duration: 158 },
    { title: "Blunt für dich", artist: "Jazeek", duration: 175 },
    { title: "C ME NOW", artist: "Jazeek", duration: 174 },
    { title: "CC", artist: "Jazeek", duration: 165 },
    { title: "CRAZYYY", artist: "Jazeek", duration: 184 },
    { title: "Das Leid der Menschen", artist: "Jazeek", duration: 182 },
    { title: "Dein Mann", artist: "Jazeek", duration: 167 },
    { title: "Diamond Ring", artist: "Jazeek", duration: 170 },
    { title: "Do you lie", artist: "Jazeek", duration: 179 },
    { title: "Drop It On Me", artist: "Jazeek", duration: 158 },
    { title: "Es soll so sein", artist: "Jazeek", duration: 170 },
    { title: "Fühlst du", artist: "Jazeek", duration: 170 },
    { title: "Für dich", artist: "Jazeek", duration: 163 },
    { title: "Hold You", artist: "Jazeek", duration: 161 },
    { title: "Jede Nacht", artist: "Jazeek", duration: 171 },
    { title: "Kann nicht verstehen", artist: "Jazeek", duration: 174 },
    { title: "Lalelu", artist: "Jazeek", duration: 166 },
    { title: "Lass dancen lass tanzen", artist: "Jazeek", duration: 172 },
    { title: "Leben", artist: "Jazeek", duration: 171 },
    { title: "Like This", artist: "Jazeek", duration: 165 },
    { title: "Like Ü", artist: "Jazeek", duration: 158 },
    { title: "Lüg mich an", artist: "Jazeek", duration: 165 },
    { title: "Lüg mich nicht mehr an", artist: "Jazeek", duration: 166 },
    { title: "Ma Baby", artist: "Jazeek", duration: 167 },
    { title: "Ma Baby 2", artist: "Jazeek", duration: 177 },
    { title: "Marbella", artist: "Jazeek", duration: 169 },
    { title: "Mary", artist: "Jazeek", duration: 168 },
    { title: "Meine Augen", artist: "Jazeek", duration: 169 },
    { title: "Miami", artist: "Jazeek", duration: 172 },
    { title: "Monday", artist: "Jazeek", duration: 163 },
    { title: "Ms Germany", artist: "Jazeek", duration: 167 },
    { title: "Nikotin", artist: "Jazeek", duration: 173 },
    { title: "Noch einmal", artist: "Jazeek", duration: 164 },
    { title: "Ohne dich", artist: "Jazeek", duration: 169 },
    { title: "Ok Ok", artist: "Jazeek", duration: 172 },
    { title: "OYE!", artist: "Jazeek", duration: 163 },
    { title: "PARFUM", artist: "Jazeek", duration: 185 },
    { title: "PLAYBOYBUNNIES", artist: "Jazeek", duration: 189 },
    { title: "Racks on me", artist: "Jazeek", duration: 159 },
    { title: "Real G", artist: "Jazeek", duration: 166 },
    { title: "Rollercoaster", artist: "Jazeek", duration: 168 },
    { title: "Rufe dich an", artist: "Jazeek", duration: 168 },
    { title: "Superstars", artist: "Jazeek", duration: 164 },
    { title: "Take it", artist: "Jazeek", duration: 169 },
    { title: "Tell me", artist: "Jazeek", duration: 166 },
    { title: "Tupac", artist: "Jazeek", duration: 159 },
    { title: "Viele Narben", artist: "Jazeek", duration: 173 },
    { title: "Warum bin ich so", artist: "Jazeek", duration: 171 },
    { title: "Wie es wär", artist: "Jazeek", duration: 164 },
    { title: "Wieder mal", artist: "Jazeek", duration: 175 },
    { title: "Wo du", artist: "Jazeek", duration: 162 },
    { title: "Wunderschön", artist: "Jazeek", duration: 164 }
];

// LIL PEEP PLAYLIST 
const lilPeepSongs = [
    { title: "Kiss", artist: "Lil Peep", duration: 168 },
    { title: "Leanin", artist: "Lil Peep", duration: 162 },
    { title: "let me bleed", artist: "Lil Peep", duration: 164 },
    { title: "Moving On", artist: "Lil Peep", duration: 177 },
    { title: "nineteen", artist: "Lil Peep", duration: 148 },
    { title: "nose ring", artist: "Lil Peep", duration: 155 },
    { title: "nothing to u", artist: "Lil Peep", duration: 159 },
    { title: "OMFG", artist: "Lil Peep", duration: 172 },
    { title: "pain", artist: "Lil Peep", duration: 163 },
    { title: "past the castle walls", artist: "Lil Peep", duration: 177 },
    { title: "pray i die", artist: "Lil Peep", duration: 165 },
    { title: "praying to the sky", artist: "Lil Peep", duration: 186 },
    { title: "Problems", artist: "Lil Peep", duration: 172 },
    { title: "red drop shawty", artist: "Lil Peep", duration: 154 },
    { title: "Sex with My Ex", artist: "Lil Peep", duration: 144 },
    { title: "shame on u", artist: "Lil Peep", duration: 155 },
    { title: "shiver", artist: "Lil Peep", duration: 145 },
    { title: "skyscrapers (love now, cry later)", artist: "Lil Peep", duration: 192 },
    { title: "Star Shopping", artist: "Lil Peep", duration: 142 },
    { title: "Text Me (feat. Era)", artist: "Lil Peep", duration: 168 }
];

// BONES PLAYLIST
const bonesSongs = [
    { title: "3M", artist: "Bones", duration: 148 },
    { title: "Air", artist: "Bones", duration: 148 },
    { title: "ArentYouASightForSoreEyes", artist: "Bones", duration: 152 },
    { title: "BlueSkies&AutomaticWeapons", artist: "Bones", duration: 155 },
    { title: "BringMeToLife", artist: "Bones", duration: 148 },
    { title: "Calcium", artist: "Bones", duration: 165 },
    { title: "Chlorella", artist: "Bones", duration: 132 },
    { title: "Cholesterol", artist: "Bones", duration: 142 },
    { title: "ComeListenToThisShit,IFoundMyUnclesOldWalkMan", artist: "Bones", duration: 145 },
    { title: "Cut", artist: "Bones", duration: 149 },
    { title: "D-19", artist: "Bones", duration: 142 },
    { title: "Embedded", artist: "Bones", duration: 158 },
    { title: "Espadrilles", artist: "Bones", duration: 148 },
    { title: "FirstNightInTheWoods", artist: "Bones", duration: 152 },
    { title: "FlaxSeed", artist: "Bones", duration: 132 },
    { title: "FunnyToSeeYouHere", artist: "Bones", duration: 148 },
    { title: "GladWeHaveAnUnderstanding", artist: "Bones", duration: 165 },
    { title: "GoneWithTheWind", artist: "Bones", duration: 162 },
    { title: "Gravel", artist: "Bones", duration: 158 },
    { title: "HelloFriend ThatStuffWillKillYa", artist: "Bones", duration: 152 },
    { title: "WhereTheTreesMeetTheFreeway", artist: "Bones", duration: 172 },
    { title: "WhiteTrashMidwesternTown", artist: "Bones", duration: 168 }
];

// GHOSTEMANE PLAYLIST
const ghostemaneSongs = [
    { title: "Cult of Thoth", artist: "Ghostemane", duration: 158 },
    { title: "D(R)Own", artist: "Ghostemane", duration: 148 },
    { title: "Exhumed", artist: "Ghostemane", duration: 172 },
    { title: "Hades", artist: "Ghostemane", duration: 148 },
    { title: "Hexada", artist: "Ghostemane", duration: 178 },
    { title: "Inside", artist: "Ghostemane", duration: 162 },
    { title: "John Dee", artist: "Ghostemane", duration: 165 },
    { title: "Kybalion", artist: "Ghostemane", duration: 152 },
    { title: "Leprosy", artist: "Ghostemane", duration: 168 },
    { title: "Melanchoholic", artist: "Ghostemane", duration: 185 },
    { title: "Nails", artist: "Ghostemane", duration: 148 },
    { title: "Niagara (feat. Lil Peep)", artist: "Ghostemane", duration: 172 },
    { title: "Nihil", artist: "Ghostemane", duration: 158 },
    { title: "Omnis", artist: "Ghostemane", duration: 132 },
    { title: "Oogabooga", artist: "Ghostemane", duration: 162 },
    { title: "Until the Light Takes Us", artist: "Ghostemane", duration: 175 },
    { title: "Wishers Lose Copper Dreamers Lose Everything", artist: "Ghostemane", duration: 172 }
];

// MIX PLAYLIST 
const mixSongs = [
    { title: "don t go", artist: "comehelpglo", duration: 164 },
    { title: "Become the Warm Jets", artist: "Current Joys", duration: 192 },
    { title: "Crying (feat. Lil Peep)", artist: "Yunggoth", duration: 173 },
    { title: "23", artist: "Chase Atlantic", duration: 188 },
    { title: "3005", artist: "Childish Gambino", duration: 182 },
    { title: "Nights", artist: "Frank Ocean", duration: 185 },
    { title: "Good News", artist: "Mac Miller", duration: 185 },
    { title: "Call Out My Name", artist: "The Weeknd", duration: 182 },
    { title: "It's Called: Freefall", artist: "Rainbow Kitten Surprise", duration: 218 }
];

// ============ CREATE PLAYLISTS WITH CORRECT FILE PATHS ============

function createPlaylistSongs(songsArray, artistFolder) {
    return songsArray.map((song, index) => ({
        id: `${artistFolder}_${index}`,
        title: song.title,
        artist: song.artist,
        duration: song.duration,
        cover: `images/${artistFolder}.jpg`,
        file: `audio/${artistFolder}/${song.artist} - ${song.title}.mp3`,
        plays: Math.floor(Math.random() * 1000000)
    }));
}

const spotifyData = {
    featuredPlaylists: [
        { id: "suicideboys", name: "$uicideboy$", description: "Dark trap essentials", cover: "images/suicideboys.jpg" },
        { id: "bones", name: "BONES", description: "Underground legend", cover: "images/bones.jpg" },
        { id: "ghostemane", name: "Ghostemane", description: "Industrial rap", cover: "images/ghostemane.jpg" },
        { id: "jazeek", name: "Jazeek", description: "German rap", cover: "images/jazeek.jpg" },
        { id: "lilpeep", name: "Lil Peep", description: "Emo rap legend", cover: "images/lilpeep.jpg" }
    ],
    
    playlists: {
        "suicideboys": {
            id: "suicideboys",
            name: "$uicideboy$",
            description: suicideboysSongs.length + " tracks",
            cover: "images/suicideboys.jpg",
            color: "#8B0000",
            songs: createPlaylistSongs(suicideboysSongs, "suicideboys")
        },
        "bones": {
            id: "bones",
            name: "BONES",
            description: bonesSongs.length + " tracks",
            cover: "images/bones.jpg",
            color: "#2F4F4F",
            songs: createPlaylistSongs(bonesSongs, "bones")
        },
        "ghostemane": {
            id: "ghostemane",
            name: "Ghostemane",
            description: ghostemaneSongs.length + " tracks",
            cover: "images/ghostemane.jpg",
            color: "#9400D3",
            songs: createPlaylistSongs(ghostemaneSongs, "ghostemane")
        },
        "jazeek": {
            id: "jazeek",
            name: "Jazeek",
            description: jazeekSongs.length + " tracks",
            cover: "images/jazeek.jpg",
            color: "#000000",
            songs: createPlaylistSongs(jazeekSongs, "jazeek")
        },
        "lilpeep": {
            id: "lilpeep",
            name: "Lil Peep",
            description: lilPeepSongs.length + " tracks",
            cover: "images/lilpeep.jpg",
            color: "#9370DB",
            songs: createPlaylistSongs(lilPeepSongs, "lilpeep")
        },

    }
};


// ============ GLOBAL STATE ============
let currentPlaylist = null;
let currentSongIndex = 0;
let isPlaying = false;
let isShuffling = false;
let isRepeating = false;
let currentView = 'home';

// ============ DOM ELEMENTS ============
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressSlider = document.getElementById('progressSlider');
const progressFill = document.getElementById('progressFill');
const currentTimeSpan = document.getElementById('currentTime');
const totalTimeSpan = document.getElementById('totalTime');
const currentSongTitle = document.getElementById('currentSongTitle');
const currentSongArtist = document.getElementById('currentSongArtist');
const currentAlbumArt = document.getElementById('currentAlbumArt');
const volumeSlider = document.getElementById('volumeSlider');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const globalSearch = document.getElementById('globalSearch');
const contentArea = document.getElementById('contentArea');
const playlistList = document.getElementById('playlistList');
const userStats = document.getElementById('userStats');

// ============ LOAD SIDEBAR ============
function loadPlaylistSidebar() {
    if (!playlistList) return;
    playlistList.innerHTML = '';
    
    Object.keys(spotifyData.playlists).forEach(key => {
        const playlist = spotifyData.playlists[key];
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist-item';
        playlistDiv.innerHTML = `
            <img class="playlist-cover" src="${playlist.cover}" alt="${playlist.name}">
            <div class="playlist-info">
                <div class="playlist-name">${playlist.name}</div>
                <div class="playlist-desc">${playlist.songs.length} songs</div>
            </div>
        `;
        playlistDiv.onclick = () => showPlaylistView(playlist);
        playlistList.appendChild(playlistDiv);
    });
}

function updateUserStats() {
    if (!userStats) return;
    let totalSongs = 0;
    Object.values(spotifyData.playlists).forEach(playlist => {
        totalSongs += playlist.songs.length;
    });
    userStats.textContent = `${totalSongs} songs • ${Object.keys(spotifyData.playlists).length} playlists`;
}

// ============ HOME PAGE ============
function showHomePage() {
    currentView = 'home';
    updateActiveNav('home');
    
    const totalSongs = Object.values(spotifyData.playlists).reduce((sum, p) => sum + p.songs.length, 0);
    
    contentArea.innerHTML = `
        <div class="hero-section">
            <div class="hero-content">
                <div class="hero-title">Welcome to Midnight!</div>
                <div class="hero-subtitle">Your personal music library with ${totalSongs} songs</div>
                <div class="hero-subtitle">🎧 ${Object.keys(spotifyData.playlists).length} playlists ready</div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-header">
                <h2 class="section-title">Your Playlists</h2>
            </div>
            <div class="songs-grid">
                ${Object.values(spotifyData.playlists).map(playlist => `
                    <div class="song-card" onclick="showPlaylistView(${JSON.stringify(playlist).replace(/"/g, '&quot;')})">
                        <div class="card-image">
                            <img src="${playlist.cover}" alt="${playlist.name}">
                            <div class="play-overlay">
                                <button class="play-button">
                                    <span class="material-icons">play_arrow</span>
                                </button>
                            </div>
                        </div>
                        <div class="card-title">${playlist.name}</div>
                        <div class="card-artist">${playlist.songs.length} songs</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showAllPlaylists() {
    currentView = 'library';
    updateActiveNav('library');
    
    contentArea.innerHTML = `
        <div class="hero-section">
            <div class="hero-content">
                <div class="hero-title">Your Library</div>
                <div class="hero-subtitle">All your playlists</div>
            </div>
        </div>
        <div class="songs-grid">
            ${Object.values(spotifyData.playlists).map(playlist => `
                <div class="song-card" onclick="showPlaylistView(${JSON.stringify(playlist).replace(/"/g, '&quot;')})">
                    <div class="card-image">
                        <img src="${playlist.cover}" alt="${playlist.name}">
                        <div class="play-overlay">
                            <button class="play-button">
                                <span class="material-icons">play_arrow</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-title">${playlist.name}</div>
                    <div class="card-artist">${playlist.songs.length} songs</div>
                </div>
            `).join('')}
        </div>
    `;
}

function showPlaylistView(playlist) {
    currentView = 'playlist';
    currentPlaylist = playlist;
    
    contentArea.innerHTML = `
        <div class="playlist-view">
            <div class="playlist-header">
                <img class="playlist-header-artwork" src="${playlist.cover}" alt="${playlist.name}">
                <div class="playlist-header-info">
                    <div class="playlist-type">PLAYLIST</div>
                    <div class="playlist-header-title">${playlist.name}</div>
                    <div class="playlist-header-desc">${playlist.description}</div>
                    <div class="playlist-stats">${playlist.songs.length} songs</div>
                </div>
            </div>
            
            <div class="songs-table">
                ${playlist.songs.map((song, index) => `
                    <div class="song-row" onclick="playSong('${playlist.id}', ${index})">
                        <div class="song-number">${index + 1}</div>
                        <img class="song-row-artwork" src="${song.cover}" alt="${song.title}">
                        <div class="song-row-info">
                            <div class="song-row-title">${song.title}</div>
                            <div class="song-row-artist">${song.artist}</div>
                        </div>
                        <div class="song-row-duration">${formatTime(song.duration)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ============ SEARCH ============
function showSearchView() {
    currentView = 'search';
    updateActiveNav('search');
    const query = globalSearch.value;
    
    if (!query) {
        contentArea.innerHTML = `
            <div class="hero-section">
                <div class="hero-content">
                    <div class="hero-title">Search</div>
                    <div class="hero-subtitle">Find your favorite songs</div>
                </div>
            </div>
            <div class="section">
                <h2 class="section-title">Your Playlists</h2>
                <div class="songs-grid">
                    ${Object.values(spotifyData.playlists).map(playlist => `
                        <div class="song-card" onclick="showPlaylistView(${JSON.stringify(playlist).replace(/"/g, '&quot;')})">
                            <div class="card-image">
                                <img src="${playlist.cover}" alt="${playlist.name}">
                            </div>
                            <div class="card-title">${playlist.name}</div>
                            <div class="card-artist">${playlist.songs.length} songs</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        return;
    }
    
    const results = [];
    Object.values(spotifyData.playlists).forEach(playlist => {
        playlist.songs.forEach((song, index) => {
            if (song.title.toLowerCase().includes(query.toLowerCase()) || 
                song.artist.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    ...song,
                    playlistId: playlist.id,
                    playlistName: playlist.name,
                    index: index
                });
            }
        });
    });
    
    if (results.length === 0) {
        contentArea.innerHTML = `<div class="hero-section"><div class="hero-content"><div class="hero-title">No results found</div></div></div>`;
        return;
    }
    
    contentArea.innerHTML = `
        <div class="hero-section">
            <div class="hero-content">
                <div class="hero-title">Search Results</div>
                <div class="hero-subtitle">Found ${results.length} songs</div>
            </div>
        </div>
        <div class="songs-table">
            ${results.map((song, idx) => `
                <div class="song-row" onclick="playSong('${song.playlistId}', ${song.index})">
                    <div class="song-number">${idx + 1}</div>
                    <img class="song-row-artwork" src="${song.cover}" alt="${song.title}">
                    <div class="song-row-info">
                        <div class="song-row-title">${song.title}</div>
                        <div class="song-row-artist">${song.artist}</div>
                        <div style="font-size: 11px; color: #1db954;">${song.playlistName}</div>
                    </div>
                    <div class="song-row-duration">${formatTime(song.duration)}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ============ AUDIO PLAYER ============
function playSong(playlistId, songIndex) {
    const playlist = spotifyData.playlists[playlistId];
    if (!playlist) return;
    
    currentPlaylist = playlist;
    currentSongIndex = songIndex;
    const song = playlist.songs[songIndex];
    
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    currentAlbumArt.src = song.cover;
    
    audio.src = song.file;
    audio.load();
    playSongAudio();
}

function playSongAudio() {
    audio.play();
    isPlaying = true;
    const playIcon = document.querySelector('#playPauseBtn .material-icons');
    if (playIcon) playIcon.textContent = 'pause';
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    const playIcon = document.querySelector('#playPauseBtn .material-icons');
    if (playIcon) playIcon.textContent = 'play_arrow';
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSongAudio();
    }
}

function nextSong() {
    if (!currentPlaylist) return;
    
    if (isShuffling) {
        let newIndex = currentSongIndex;
        while (newIndex === currentSongIndex && currentPlaylist.songs.length > 1) {
            newIndex = Math.floor(Math.random() * currentPlaylist.songs.length);
        }
        currentSongIndex = newIndex;
    } else {
        currentSongIndex = (currentSongIndex + 1) % currentPlaylist.songs.length;
    }
    
    const song = currentPlaylist.songs[currentSongIndex];
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    currentAlbumArt.src = song.cover;
    audio.src = song.file;
    audio.load();
    playSongAudio();
}

function prevSong() {
    if (!currentPlaylist) return;
    
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    
    if (isShuffling) {
        let newIndex = currentSongIndex;
        while (newIndex === currentSongIndex && currentPlaylist.songs.length > 1) {
            newIndex = Math.floor(Math.random() * currentPlaylist.songs.length);
        }
        currentSongIndex = newIndex;
    } else {
        currentSongIndex = (currentSongIndex - 1 + currentPlaylist.songs.length) % currentPlaylist.songs.length;
    }
    
    const song = currentPlaylist.songs[currentSongIndex];
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    currentAlbumArt.src = song.cover;
    audio.src = song.file;
    audio.load();
    playSongAudio();
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateProgress() {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressSlider.value = percent;
        progressFill.style.width = `${percent}%`;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        totalTimeSpan.textContent = formatTime(audio.duration);
    }
}

function setProgress(e) {
    const rect = progressSlider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    audio.currentTime = (percent / 100) * audio.duration;
}

function updateVolume() {
    audio.volume = volumeSlider.value / 100;
}

function updateActiveNav(view) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-view') === view) {
            item.classList.add('active');
        }
    });
}

// ============ EVENT LISTENERS ============
function setupEventListeners() {
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (prevBtn) prevBtn.addEventListener('click', prevSong);
    if (nextBtn) nextBtn.addEventListener('click', nextSong);
    if (audio) audio.addEventListener('timeupdate', updateProgress);
    if (audio) audio.addEventListener('ended', () => {
        if (isRepeating) {
            audio.currentTime = 0;
            playSongAudio();
        } else {
            nextSong();
        }
    });
    if (progressSlider) progressSlider.addEventListener('click', setProgress);
    if (volumeSlider) volumeSlider.addEventListener('input', updateVolume);
    
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            isShuffling = !isShuffling;
            shuffleBtn.style.color = isShuffling ? '#1db954' : '#b3b3b3';
        });
    }
    
    if (repeatBtn) {
        repeatBtn.addEventListener('click', () => {
            isRepeating = !isRepeating;
            repeatBtn.style.color = isRepeating ? '#1db954' : '#b3b3b3';
        });
    }
    
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.getAttribute('data-view');
            if (view === 'home') showHomePage();
            else if (view === 'search') showSearchView();
            else if (view === 'library') showAllPlaylists();
        });
    });
    
    if (globalSearch) {
        let searchTimeout;
        globalSearch.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                showSearchView();
            }, 300);
        });
    }
}

function setInitialVolume() {
    if (audio) audio.volume = 0.7;
    if (volumeSlider) volumeSlider.value = 70;
}

// ============ INITIALIZATION ============
function init() {
    loadPlaylistSidebar();
    updateUserStats();
    setupEventListeners();
    showHomePage();
    setInitialVolume();
}

// Make functions global for onclick
window.showPlaylistView = showPlaylistView;
window.playSong = playSong;
window.showAllPlaylists = showAllPlaylists;
window.showSearchView = showSearchView;

// Start the app
init();
