import React from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({ videoId }) {
  const opts = {
    height: '680',
    width: '100%',
    borderRadius: '15px',
    playerVars: {
      autoplay: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
    },
  };


  return <YouTube videoId={videoId} opts={opts} />;
}
