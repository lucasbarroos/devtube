import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { Grid } from '@material-ui/core';
import ChannelService from '../../services/Channel/index';
import VideoService from '../../services/Video/index';
import VideoCard from '../../components/VideoCard/index';
import Toast from '../../utils/Toastify/index';
import {
  Container,
  FormBanner,
  Form,
  FormVideos,
  Banner,
  Picture,
  Title,
  Subscribeds,
  SubscribeButton,
} from './styles';

const Channel = ({ user, dispatch }) => {
  const { id } = useParams();
  const [subscribed, setSubscribed] = useState({});
  const [subs, setSubs] = useState(0);
  const [channel, setChannel] = useState({});
  const [channelVideos, setChannelVideos] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const subscribeDispatch = {
    type: 'SUBSCRIBE',
    _id: user._id,
    picture: user.picture,
    name: user.name,
    email: user.email,
    profession: user.profession,
    channels: [...user.channels, id],
  };

  const getChannel = async () => {
    const response = await ChannelService.get({ id });
    if (response.ok) {
      setChannel(response.data);
      setSpinner(false);
    }
  };

  const getVideosByChannel = async () => {
    const response = await VideoService.get({ params: { channel: id } });
    if (response.ok) {
      setChannelVideos(response.data);
    }
  };

  const checkSubscribedChannel = async () => {
    if (user.autenticated) {
      const response = await ChannelService.checkSubscribed(id, user._id);
      if (response.ok) {
        setSubscribed(response.data.subscribed);
      } else {
        setSubscribed(false);
      }
    }
  };

  const handleSubscribe = async () => {
    if (user.autenticated) {
      if (!subscribed) {
        const response = await ChannelService.subscribe(id, user._id);
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

  useEffect(() => {
    setSpinner(true);
    getChannel();
    getVideosByChannel();
    checkSubscribedChannel();
  }, [id]);

  return (
    <Container>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!spinner}>
        <FormBanner>
          <Banner src={channel.wallpaper} />
          <Form>
            <Picture src={channel.banner} />
            <SubscribeButton onClick={handleSubscribe} active={subscribed}>{subscribed ? 'Subscribed' : 'Subscribe'}</SubscribeButton>
            <Title>
              {channel.name}
            </Title>
            <Subscribeds>34k subscribers</Subscribeds>
          </Form>
        </FormBanner>
        <FormVideos>
          <Grid container>
            { channelVideos.map((video) => (
              <Grid item lg={3} align="center">
                <VideoCard video={video} />
              </Grid>
            ))}
          </Grid>
        </FormVideos>
      </Animated>
    </Container>
  );
};

export default connect((state) => ({ user: state.user }))(Channel);
