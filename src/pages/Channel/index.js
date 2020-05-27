import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { Grid } from '@material-ui/core';
import ChannelService from '../../services/Channel/index';
import VideoService from '../../services/Video/index';
import VideoCard from '../../components/VideoCard/index';
import {
  Container,
  FormBanner,
  Form,
  FormVideos,
  Banner,
  Picture,
  Title,
  Subscribeds,
} from './styles';

export default function Channel() {
  const { id } = useParams();
  const [channel, setChannel] = useState({});
  const [channelVideos, setChannelVideos] = useState([]);
  const [spinner, setSpinner] = useState(true);

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

  useEffect(() => {
    setSpinner(true);
    getChannel();
    getVideosByChannel();
  }, [id]);

  return (
    <Container>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!spinner}>
        <FormBanner>
          <Banner src={channel.wallpaper} />
          <Form>
            <Picture src={channel.banner} />
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
}
