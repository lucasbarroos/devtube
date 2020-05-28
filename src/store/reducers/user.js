const localUser = JSON.parse(localStorage.getItem('user@devtube'));
const noUserImage = 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png';
const INITIAL_STATE = {
  autenticated: !!localUser,
  name: localUser ? localUser.name : '',
  profession: localUser ? localUser.profession : '',
  channels: localUser ? localUser.channels : [],
  picture: localUser ? localUser.picture : noUserImage,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        autenticated: action.autenticated,
        name: action.name,
        profession: action.profession,
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
