const playlist = [
    {
      title: "Normal",
      artist: "BTS",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/05/e2/1a05e2d1-8102-99d2-cc5e-6a7bf856eb16/mzaf_190846966956031405.plus.aac.p.m4a",
      img: "arirang.png",
      fav: "Thy's favorite",
      spotify: "https://open.spotify.com/embed/album/3ukkRHDHbN8tNRPKsGZR1h?utm_source=generator"
    },
    {
      title: "One More Night",
      artist: "BTS",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f5/49/37/f5493775-3aa7-f310-572f-19baa9271b44/mzaf_10614943248626878287.plus.aac.p.m4a",
      img: "arirang.png",
      fav: "Kristina's favorite",
      spotify: "https://open.spotify.com/embed/playlist/0NvKUuHHsVWk7jFQPtO5Zs?utm_source=generator" 
    },
    {
      title: "Merry Go Round",
      artist: "BTS",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/91/dc/9e/91dc9ed9-af10-b22c-d816-e118f95a6dcc/mzaf_1718005331296458207.plus.aac.p.m4a",
      img: "arirang.png",
      fav: "Steven's favorite",
      spotify: "https://open.spotify.com/embed/playlist/3xcAjXzPRxJBqqMgHFXMJS?utm_source=generator"
    },
    {
      title: "Body to Body",
      artist: "BTS",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0e/72/83/0e72838d-504d-92a8-3f36-6bf36639b928/mzaf_8425186640909130469.plus.aac.p.m4a",
      img: "arirang.png",
      fav: "Nataly's favorite",
      spotify: "https://open.spotify.com/embed/playlist/7tTWcbBalqa3Z1OILYfLt3?utm_source=generator"
    },
    {
      title: "Like Animal",
      artist: "BTS",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/01/71/b1/0171b153-7047-ed09-d533-cbb42b4ccaba/mzaf_11680273895767990857.plus.aac.p.m4a",
      img: "arirang.png",
      fav: "Rose's favorite",
      spotify: "https://open.spotify.com/embed/playlist/1aZK3U4Bbc1lFBcrTahoRn?utm_source=generator"
    },

  ];

  const jukebox = document.querySelector('#jukebox');
  const nowPlaying = document.querySelector('#nowPlaying');
  const controlPanel = document.querySelector('#pause');
  
  let currentAudio = null;
  let currentSong = null;
  
    playlist.forEach((song, index) => {
    const songDiv = document.createElement('div');
    songDiv.classList.add('song');
    songDiv.dataset.index = index;
  
    const img = document.createElement('img');
    img.src = `${song.img}`;
    img.alt = `${song.title} album art`;
  
    const title = document.createElement('p');
    title.textContent = `${song.title} by ${song.artist}`;
  
    songDiv.appendChild(img);
    songDiv.appendChild(title);
    jukebox.appendChild(songDiv);
  });
  
  jukebox.addEventListener('click', (e) => {
    const songDiv = e.target.closest('.song');
    if (!songDiv) return;
  
    const songIndex = songDiv.dataset.index;
    const selectedSong = playlist[songIndex];
    const spotifyPlayer = document.querySelector('#spotifyPlayer');
    spotifyPlayer.src = selectedSong.spotify;
  
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    currentAudio = new Audio(selectedSong.audio);
    currentAudio.play();
    currentSong = selectedSong;
  
    nowPlaying.innerHTML = `Now Playing: "${selectedSong.title}" by ${selectedSong.artist}<br>${selectedSong.fav} song!`;
    playPauseBtn.textContent = 'Pause';
  });
  
  const playPauseBtn = document.createElement('button');
  playPauseBtn.textContent = 'Play';
  controlPanel.appendChild(playPauseBtn);
  
  playPauseBtn.addEventListener('click', () => {
    if (!currentAudio) return;
  
    if (currentAudio.paused) {
      currentAudio.play();
      playPauseBtn.textContent = 'Pause';
      nowPlaying.textContent = `Now Playing: "${currentSong.title}" by ${currentSong.artist}`;
    } 
    else {
      currentAudio.pause();
      playPauseBtn.textContent = 'Play';
      nowPlaying.textContent = `Paused: "${currentSong.title}"`;
    }
  });
  
  controlPanel.appendChild(playPauseBtn);