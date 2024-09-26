import React from 'react';
import '../styles/YouTubeClone.css'; // Import CSS for styling

const YouTubeClone = () => {
  // Sample video data with YouTube links
  const videos = [
    {
      id: 1,
      title: 'Hera Pheri Song',
      description: 'This is a description of sample video 1.',
      thumbnail: 'https://i.ytimg.com/vi/JtOwvYALGsg/maxresdefault.jpg', // Replace with your thumbnail URL
      videoUrl: 'https://www.youtube.com/watch?v=EH9yR6T4ePI&list=RDEHj51Hun6sY&index=10' // Actual video URL
    },
    {
      id: 2,
      title: 'Maahi',
      description: 'Abddjkjkdkjjkdkdkkkkkkkkkkkkkkk',
      thumbnail: 'https://i.ytimg.com/vi/e1edxTqJnKk/maxresdefault.jpg',
      videoUrl: 'https://youtube.com/watch?v=Sd34fi620TY' // Replace with actual video URL
    },
    {
      id: 3,
      title: 'Dhol',
      description: 'This is a description of sample video 3.',
      thumbnail: 'https://i.ytimg.com/vi/CRzvimM6ZJk/sddefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=9hxtrNicH6o&list=RDEHj51Hun6sY&index=11' // Replace with actual video URL
    },
  ];

  return (
    <div className="youtube-clone">
      <header className="youtube-header">
        <h1>YouTube Clone</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
      </header>
      <main className="youtube-main">
        <h2>Trending Videos</h2>
        <div className="video-list">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default YouTubeClone;
