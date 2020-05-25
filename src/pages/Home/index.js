import React from 'react';
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

const ContainerStyle = {
  paddingTop: 20,
};

const videos = [{
  title: 'Vanilla JS na pratica',
  banner: 'https://i.ytimg.com/vi/-OqZzV__hts/maxresdefault.jpg',
  video: 'https://www.youtube.com/watch?v=-OqZzV__hts',
  channel: 'Red Stapler',
  duration: '2:17',
}, {
  title: 'Introducao ao Nodejs',
  banner: 'https://rocketseat.com.br/static/images/og/nodejs.png',
  video: 'https://www.youtube.com/watch?v=-OqZzV__hts',
  channel: 'Rocketseat',
  duration: '38:23',
}];

export default function Home() {
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
                <VideoDuration>{el.duration}</VideoDuration>
                <VideoBanner src={el.banner} />
                <VideoTitle>{el.title}</VideoTitle>
                <VideoChannel>{el.channel}</VideoChannel>
              </VideoCard>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
