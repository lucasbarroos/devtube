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
  RelatedVideoInfo,
  RelatedVideoName,
  RelatedVideoCard,
  RelatedVideoBanner,
  RelatedVideoTitle,
  RelatedVideoViews,
  RelatedVideoChannel,
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

const relatedVideos = [{
  title: 'Vanilla JS na pratica',
  banner: 'https://i.ytimg.com/vi/-OqZzV__hts/maxresdefault.jpg',
  video: 'https://www.youtube.com/watch?v=-OqZzV__hts',
  channel: { name: 'Red Stapler' },
  duration: '2:17',
}, {
  title: 'Introducao ao Nodejs',
  banner: 'https://rocketseat.com.br/static/images/og/nodejs.png',
  video: 'https://www.youtube.com/watch?v=-OqZzV__hts',
  channel: { name: 'Rocketseat' },
  duration: '38:23',
}];

export default function Video() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={10} align="center">
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
        <Grid item lg={2}>
          <Grid container>
            <Grid item lg={12}>
              <RelatedVideoName>
                Recommended Videos
              </RelatedVideoName>
            </Grid>
            <Grid item lg={12}>
              {
                relatedVideos.map((el) => (
                  <RelatedVideoCard>
                    <RelatedVideoBanner src={el.banner} />
                    <RelatedVideoTitle>{el.title}</RelatedVideoTitle>
                    <RelatedVideoInfo>
                      <RelatedVideoChannel>{el.channel.name}</RelatedVideoChannel>
                      <RelatedVideoViews>22k views</RelatedVideoViews>
                    </RelatedVideoInfo>
                  </RelatedVideoCard>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
