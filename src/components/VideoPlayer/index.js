/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({ videoId }) {
  const { clientWidth, clientHeight } = document.getElementById('root');
  const [responsible, setResponsible] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [width, setWidth] = useState('100%');

  useEffect(() => {
    setResponsible(clientWidth < 1333);
    setPortrait(false);
    setWidth(clientWidth);
  }, [clientHeight]);

  const opts = {
    // minHeight: '680',
    height: responsible ? (portrait ? '340px' : width) : '680',
    width: portrait ? width : '100%',
    borderRadius: '15px',
    playerVars: {
      autoplay: 0,
      start: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
