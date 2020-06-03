import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { useParams, Link } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/index';
import VideoService from '../../services/Video/index';
import ChannelService from '../../services/Channel/index';
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
  const [subs, setSubs] = useState(0);
  const [recommendedVideo, setRecommendedVideo] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const subscribeDispatch = {
    type: 'SUBSCRIBE',
    _id: user._id,
    picture: user.picture,
    name: user.name,
    email: user.email,
    profession: user.profession,
    channels: [...user.channels, video.channel ? video.channel._id : null],
  };

  const getVideo = async () => {
    const response = await VideoService.get({ id });
    if (response.ok) {
      setVideo(response.data);
      setSubs(response.subs);
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

  const checkSubscribedChannel = async () => {
    if (user.autenticated) {
      const response = await ChannelService.checkSubscribedByVideo(id, user._id);
      if (response.ok) {
        setSubscribed(response.data.subscribed);
      } else {
        setSubscribed(false);
      }
    }
  };

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    setSpinner(true);
    getVideo();
    getRelatedVideos();
    checkRecommendVideo();
    checkSubscribedChannel();
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

  const handleSubscribe = async () => {
    if (user.autenticated) {
      if (!subscribed) {
        const response = await ChannelService.subscribeByVideo(id, user._id);
        if (response.ok) {
          setSubscribed(true);
          Toast.addSuccess();
          dispatch(subscribeDispatch);
          setSubs(subs + 1);
        } else {
          setSubscribed(false);
        }
      } else {
        Toast.addSuccess('You have subscribed this channel!');
      }
    }
  };

  return (
    <Container>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!spinner}>
        <Grid container>
          <Grid item lg={10} align="center">
            <Grid container>
              <Grid item lg={12} md={12} align="center" id="video_player_container">
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
                    {recommendedVideo ? 'You liked' : 'Like this'}
                    {' '}
                    {video.video_analytics ? video.video_analytics.recommended : 0}
                  </RecommendButton>
                  <SubscribeButton onClick={handleSubscribe} active={subscribed}>
                    {subscribed ? 'Subscribed' : 'Subscribe'}
                    {' '}
                    {subs}
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
          <Grid item lg={2} md={12} sm={12} xs={12}>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <RelatedVideoName>
                  Recommended Videos
                </RelatedVideoName>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Grid container>
                  {
                    relatedVideos.map((el) => (
                      <Grid item lg={12} md={4} sm={6} xs={12} key={el._id}>
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
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Animated>
    </Container>
  );
};

export default connect((state) => ({ user: state.user }))(Video);
