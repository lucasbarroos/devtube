import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { useParams, Link } from 'react-router-dom';
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

export default function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const getVideo = async () => {
    const response = await VideoService.get({ id });
    if (response.ok) {
      setVideo(response.data);
      setSpinner(false);
    }
  };

  const getRelatedVideos = async () => {
    const response = await VideoService.get();
    if (response.ok) {
      setRelatedVideos(response.data);
    }
  };

  useEffect(() => {
    setSpinner(true);
    getVideo();
    getRelatedVideos();
  }, [id]);

  return (
    <Container>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!spinner}>
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
                    Like this
                    {' '}
                    14k
                  </RecommendButton>
                  <SubscribeButton>
                    Subscribe
                    {' '}
                    32k
                  </SubscribeButton>
                </VideoInfo>
              </Grid>
              <Grid item lg={12} md={12} align="left">
                <ChannelInfo>
                  <Link to={`/channel/${video.channel ? video.channel._id : null}`} style={{ textDecoration: 'none' }}>
                    <ChannelLogo src={video.channel ? video.channel.banner : null} />
                  </Link>
                  <ChannelName>{video.channel ? video.channel.name : ''}</ChannelName>
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
                  <Link to={`/video/${el._id}`}>
                    <RelatedVideoCard>
                      <RelatedVideoBanner src={el.banner} />
                      <RelatedVideoTitle>{el.title}</RelatedVideoTitle>
                      <RelatedVideoInfo>
                        <RelatedVideoChannel>{el.channel ? el.channel.name : ''}</RelatedVideoChannel>
                        <RelatedVideoViews>22k views</RelatedVideoViews>
                      </RelatedVideoInfo>
                    </RelatedVideoCard>
                  </Link>
                ))
              }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Animated>
    </Container>
  );
}
