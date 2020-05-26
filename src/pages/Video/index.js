import React from 'react';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer/index';
import {
  Container,
  Title,
  VideoInfo,
  VideoViews,
  ChannelInfo,
  ChannelLogo,
  ChannelName,
  DateVideo,
} from './styles';

const video = {
  title: 'Introducao ao Nodejs',
  banner: 'https://rocketseat.com.br/static/images/og/nodejs.png',
  video: '-j7vLmBMsEU',
  channel: {
    name: 'Rocketseat',
    uri: 'https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg',
  },
  duration: '38:23',
};

export default function Video() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={9} align="center">
          <Grid container>
            <Grid item lg={12} align="center">
              <VideoPlayer videoId={video.video} style={{ borderRadius: 15 }} />
            </Grid>
            <Grid item lg={12} align="left">
              <VideoInfo>
                <Title>{video.title}</Title>
                <VideoViews>120k views</VideoViews>
              </VideoInfo>
            </Grid>
            <Grid item lg={12} align="left">
              <ChannelInfo>
                <ChannelLogo src={video.channel.uri} />
                <ChannelName>{video.channel.name}</ChannelName>
                <DateVideo>29 Jun</DateVideo>
              </ChannelInfo>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3}>
          {/* Videos Relacionados */}
        </Grid>
      </Grid>
    </Container>
  );
}
