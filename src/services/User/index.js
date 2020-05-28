import Service from '../Service';
import Api from '../Api';

class User extends Service {
  constructor() {
    super({ route: '/user' });
  }
    
    login(data) {
        return Api
        .post(`/login`, data)
        .then((response) => ({
            data: response.data,
            ok: true,
        })).catch((error) => ({
            ok: false,
            message:
            error.response?.data?.message || error.message || 'Route not found',
        }));
    }

    register(data) {
        return Api
        .post(`/register`, data)
        .then((response) => ({
            data: response.data,
            ok: true,
        })).catch((error) => ({
            ok: false,
            message:
            error.response?.data?.message || error.message || 'Route not found',
        }));
    }
}

export default new User();
