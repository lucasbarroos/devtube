const localUser = JSON.parse(localStorage.getItem('user@devtube'));
const INITIAL_STATE = {
  autenticated: !!localUser,
  _id: localUser ? localUser._id : '',
  name: localUser ? localUser.name : '',
  email: localUser ? localUser.email : '',
  profession: localUser ? localUser.profession : '',
  channels: localUser ? localUser.channels : [],
  picture: localUser ? localUser.picture : '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN': {
      localStorage.setItem('user@devtube', JSON.stringify({
        autenticated: true,
        _id: action._id,
        name: action.name,
        email: action.email,
        profession: action.profession,
        channels: action.channels,
        picture: action.picture,
      }));
      return {
        ...state,
        autenticated: true,
        _id: action._id,
        name: action.name,
        email: action.email,
        profession: action.profession,
        channels: action.channels,
        picture: action.picture,
      };
    }
    case 'UPDATE': {
      localStorage.setItem('user@devtube', JSON.stringify({
        autenticated: true,
        _id: action._id,
        name: action.name,
        profession: action.profession,
        email: action.email,
        channels: action.channels,
        picture: action.picture,
      }));
      return {
        ...state,
        autenticated: true,
        _id: action._id,
        name: action.name,
        profession: action.profession,
        email: action.email,
        channels: action.channels,
        picture: action.picture,
      };
    }
    case 'SUBSCRIBE': {
      localStorage.setItem('user@devtube', JSON.stringify({
        autenticated: true,
        _id: action._id,
        name: action.name,
        profession: action.profession,
        email: action.email,
        channels: action.channels,
        picture: action.picture,
      }));
      return {
        ...state,
        autenticated: true,
        _id: action._id,
        name: action.name,
        profession: action.profession,
        email: action.email,
        channels: action.channels,
        picture: action.picture,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
