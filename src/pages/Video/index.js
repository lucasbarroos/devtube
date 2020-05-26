import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer/index';
import VideoService from '../../services/Video/index';
import {
  Container,
  Title,
  VideoInfo,
  VideoViews,
  ChannelInfo,
  ChannelLogo,
  ChannelName,
  DateVideo,
  Description,
  RecommendButton,
  SubscribeButton,
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
  description: 'Essa é a terceira parte de uma série de vídeos onde construimos um sistema completo de upload de arquivos com NodeJS e ReactJS, e nesse vídeo vamos colocar essas aplicações em produção. Quer saber como funciona o deploy de uma aplicação NodeJS no back-end ou mesmo o deploy de uma aplicação ReactJS no front-end? Vem comigo!',
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
  const [video, setVideo] = useState({});

  return (
    <Container>
      <Grid container>
        <Grid item lg={10} align="center">
          <Grid container>
            <Grid item lg={12} md={12} align="center">
              <VideoPlayer videoId={video.video} style={{ borderRadius: 15 }} />
            </Grid>
            <Grid item lg={12} md={12} align="left">
              <VideoInfo>
                <Title>{video.title}</Title>
                <VideoViews>120k views</VideoViews>
                <RecommendButton>
                  Recomendar
                  {' '}
                  14k
                </RecommendButton>
                <SubscribeButton>
                  Inscricao
                  {' '}
                  32k
                </SubscribeButton>
              </VideoInfo>
            </Grid>
            <Grid item lg={12} md={12} align="left">
              <ChannelInfo>
                <ChannelLogo src={video.channel.uri} />
                <ChannelName>{video.channel.name}</ChannelName>
                <DateVideo>29 Jun</DateVideo>
              </ChannelInfo>
              <Description>{video.description}</Description>
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
