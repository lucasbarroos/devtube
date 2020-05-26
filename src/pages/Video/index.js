import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Container,
  Title,
  VideoContainer,
  VideoInfo,
} from './styles';

const video = {
  title: 'Introducao ao Nodejs',
  banner: 'https://rocketseat.com.br/static/images/og/nodejs.png',
  video: 'https://www.youtube.com/watch?v=-OqZzV__hts',
  channel: 'Rocketseat',
  duration: '38:23',
};

export default function Video() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={9} align="center">
          <VideoContainer src={video.banner} />
        </Grid>
        <Grid item lg={9} align="left">
          <VideoInfo>
            <Title>{video.title}</Title>
          </VideoInfo>
        </Grid>
      </Grid>
    </Container>
  );
}
