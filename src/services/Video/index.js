import Service from '../Service';
import Api from '../Api';

class Video extends Service {
  constructor() {
    super({ route: '/video' });
  }

  get({ params, id, includeInactive } = {}) {
    return Api
      .get(`${this.route}${id? `/${id}` : 's'}`, id ? null : { params })
      .then((response) => ({
        data: response.data.docs || response.data.video || response.data ,
        subs: response.data.subs || 0,        
        total: response.data.total || response.data.length,
        limit: response.data.limit || response.data.length,
        page: response.data.page || 1,
        pages: response.data.pages || 1,
        ok: true,
        status: response.data.status,
      }))
      .catch((error) => ({
        ok: false,
        message:
          error.response?.data?.message || error.message || "Route not found",
      }));
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
