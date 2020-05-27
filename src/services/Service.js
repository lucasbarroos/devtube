import api from "./Api";

class Service {
  constructor({ route }) {
    this.route = route;
  }

  store(data) {
    return api
      .post(this.route, data)
      .then((response) => ({
        data: response.data,
        ok: true,
        status: response.data.status,
      }))
      .catch((error) => ({
        ok: false,
        message:
          error.response?.data?.message || error.message || "Route not found",
      }));
  }

  get({ params, id, includeInactive } = {}) {
    return api
      .get(`${this.route}${id? `/${id}` : 's'}`)
      .then((response) => ({
        data: response.data.docs || response.data,
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

  put(id, data) {
    return api
      .put(`${this.route}/${id}`, data)
      .then((response) => {
        return {
          data: response.data.docs || response.data,
          ok: true,
          status: response.data.status,
        };
      })
      .catch((error) => ({
        ok: false,
        message:
          error.response?.data?.message || error.message || "Route not found",
      }));
  }
}

export default Service;
