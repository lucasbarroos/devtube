import { combineReducers } from 'redux';

import user from './user';
import video from './video';

export default combineReducers({
  user,
  video,
});
