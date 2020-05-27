import React from 'react';
import { Link } from 'react-router-dom';
import {
  VideoBanner,
  VideoDuration,
  VideoTitle,
  VideoForm,
  VideoChannel,
} from './styles';

export default function VideoCard({ video }) {
  return (
    <VideoForm>
      <Link to={`/video/${video._id}`}>
        <VideoDuration>{video.duration}</VideoDuration>
        <VideoBanner src={video.banner} />
      </Link>
      <VideoTitle>{video.title}</VideoTitle>
      <VideoChannel>{video.channel.name}</VideoChannel>
    </VideoForm>
  );
}
