import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {
  Container,
  Title,
  VideoCard,
  VideoBanner,
  VideoDuration,
  VideoChannel,
  VideoTitle,
} from './styles';
import VideoService from '../../services/Video/index';

const ContainerStyle = {
  paddingTop: 20,
};

export default function Home() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await VideoService.get();
    if (response.ok) {
      setVideos(response.data);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Container style={ContainerStyle}>

      <Grid container>
        <Grid item lg={12}>
          <Title>Recomendado</Title>
        </Grid>
        {
          videos.map((el) => (
            <Grid item lg={3} align="center">
              <VideoCard>
                <Link to={`/video/${el._id}`}>
                  <VideoDuration>{el.duration}</VideoDuration>
                  <VideoBanner src={el.banner} />
                </Link>
                <VideoTitle>{el.title}</VideoTitle>
                <VideoChannel>{el.channel.name}</VideoChannel>
              </VideoCard>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
