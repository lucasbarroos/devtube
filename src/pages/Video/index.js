import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { useParams, Link } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/index';
import VideoService from '../../services/Video/index';
import UserService from '../../services/User/index';
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
import Toast from '../../utils/Toastify/index';

const Video = ({ user, dispatch }) => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [recommendedVideo, setRecommendedVideo] = useState(false);
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

  const checkRecommendVideo = async () => {
    if (user.autenticated) {
      const response = await VideoService.checkRecommended(id, user._id);
      if (response.ok) {
        setRecommendedVideo(true);
      } else {
        setRecommendedVideo(false);
      }
    }
  };

  useEffect(() => {
    setSpinner(true);
    getVideo();
    getRelatedVideos();
    checkRecommendVideo();
  }, [id]);

  const handleRecommend = async () => {
    if (user.autenticated) {
      if (!recommendedVideo) {
        const response = await VideoService.recommend(id, user._id);
        if (response.ok) {
          setVideo(response.data);
          setRecommendedVideo(true);
          Toast.addSuccess();
        } else {
          Toast.addError();
        }
      } else {
        Toast.addSuccess('You have recommended this video!');
      }
    }
  };

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
                  <VideoViews>
                    {video.video_analytics ? video.video_analytics.views : 0}
                    {' '}
                    views
                  </VideoViews>
                  <RecommendButton onClick={handleRecommend} active={recommendedVideo}>
                    Like this
                    {' '}
                    {video.video_analytics ? video.video_analytics.recommended : 0}
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
                        <RelatedVideoViews>
                          {el.video_analytics ? el.video_analytics.views : 0}
                          {' '}
                          views
                        </RelatedVideoViews>
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
};

export default connect((state) => ({ user: state.user }))(Video);
