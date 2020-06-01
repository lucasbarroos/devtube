import Service from '../Service';
import Api from '../Api';

class Video extends Service {
  constructor() {
    super({ route: '/video' });
  }

  recommend(id, userId) {
    return Api
      .patch(`/recommend_video/${id}/${userId}`)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error,
      }));
  }

  checkRecommended(id, userId) {
    return Api
      .get(`/recommend_video/${id}/${userId}`)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error,
      }));
  }
}

export default new Video();
