import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import VideoCard from '../../components/VideoCard/index';
import {
  Container,
  Title,

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
          <Title>Recommendations</Title>
        </Grid>
        {
          videos.map((el) => (
            <Grid item lg={3} align="center">
              <VideoCard video={el} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
