import React, { useState } from 'react';
import '../styles/SpotifyClone.css';

const SpotifyClone = () => {
  const [playlists] = useState([
    {
      id: 1,
      name: 'Chill Vibes',
      description: 'Relax and unwind with these smooth tracks.',
      imageUrl: "D:\Portfolio Website Og\my-portfolio\src\assets\images\songs.jpg", // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Top Hits 2024',
      description: 'The biggest hits of 2024.',
      imageUrl: 'https://via.placeholder.com/80', // Replace with actual image URLs
    },
    {
      id: 3,
      name: 'Workout Mix',
      description: 'Get pumped with these energetic tracks.',
      imageUrl: 'https://via.placeholder.com/80', // Replace with actual image URLs
    },
  ]);

  const [nowPlaying] = useState({
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    imageUrl: 'https://via.placeholder.com/80', // Replace with actual image URL
  });

  return (
    <div className="spotify-clone">
      <header className="spotify-header">
        <h1>Spotify Clone</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
          </ul>
        </nav>
      </header>
      <main className="spotify-main">
        <section className="featured-playlists">
          <h2>Featured Playlists</h2>
          {playlists.map((playlist) => (
            <div className="playlist" key={playlist.id}>
              <img src={playlist.imageUrl} alt={playlist.name} />
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </section>
        <section className="now-playing">
          <h2>Now Playing</h2>
          <div className="track">
            <img src={nowPlaying.imageUrl} alt={nowPlaying.title} />
            <h3>{nowPlaying.title}</h3>
            <p>{nowPlaying.artist}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SpotifyClone;
