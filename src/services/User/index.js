/* eslint-disable class-methods-use-this */
import Service from '../Service';
import Api from '../Api';

class User extends Service {
  constructor() {
    super({ route: '/user' });
  }

  login(data) {
    return Api
      .post('/login', data)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error.response.data.error || 'Error',
      }));
  }

  register(data) {
    return Api
      .post('/register', data)
      .then((response) => ({
        data: response.data,
        ok: true,
      })).catch((error) => ({
        ok: false,
        message: error.response.data.error || error.response.data.message || 'Error',
      }));
  }
}

export default new User();
