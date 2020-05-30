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
        message: error,
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
        message: error,
      }));
  }
}

export default new User();
