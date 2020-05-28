const INITIAL_STATE = {
  running: false,
  title: '',
  channel: null,
  banner: null,
};

export default function video(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAY': {
      return {
        ...state,
        running: true,
        title: action.title,
        channel: action.channel,
        banner: action.banner,
      };
    }
    case 'STOP': {
      return {
        ...state,
        running: false,
        title: action.title,
        channel: action.channel,
        banner: action.banner,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
