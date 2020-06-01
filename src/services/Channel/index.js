import Service from '../Service';
import Api from '../Api';

class Channel extends Service {
  constructor() {
    super({ route: '/channel' });
  }

  subscribe(id, userId) {
    return Api
      .patch(`/subscribe/${id}/${userId}`)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error,
      }));
  }

  subscribeByVideo(id, userId) {
    return Api
      .patch(`/subscribe_by_video/${id}/${userId}`)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error,
      }));
  }

  checkSubscribedByVideo(id, userId) {
    return Api
      .get(`/subscribe_by_video/${id}/${userId}`)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error,
      }));
  }

  checkSubscribed(id, userId) {
    return Api
      .get(`/subscribe/${id}/${userId}`)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error,
      }));
  }
}

export default new Channel();
