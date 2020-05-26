import Service from '../Service';

class Video extends Service {
  constructor() {
    super({ route: '/video' });
  }
}

export default new Video();
