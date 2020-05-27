import Service from '../Service';

class Channel extends Service {
  constructor() {
    super({ route: '/channel' });
  }
}

export default new Channel();
