const localUser = JSON.parse(localStorage.getItem('user@devtube'));
const noUserImage = 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png';
const INITIAL_STATE = {
  autenticated: !!localUser,
  _id: localUser ? localUser._id : '',
  name: localUser ? localUser.name : '',
  email: localUser ? localUser.email : '',
  profession: localUser ? localUser.profession : '',
  channels: localUser ? localUser.channels : [],
  picture: localUser ? localUser.picture : noUserImage,
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
        _id: INITIAL_STATE._id,
        name: action.name,
        email: INITIAL_STATE.email,
        profession: action.profession,
        channels: INITIAL_STATE.channels,
        picture: INITIAL_STATE.picture,
      }));
      return {
        ...state,
        autenticated: true,
        _id: INITIAL_STATE._id,
        name: action.name,
        email: INITIAL_STATE.email,
        profession: action.profession,
        channels: INITIAL_STATE.channels,
        picture: INITIAL_STATE.picture,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
