import { combineReducers } from "redux";

import { reducer as offline } from "redux-offline-queue";
import login from './login'
import config from './config'
import notifications from './notifications'

export default combineReducers({
    offline,
    login,
    config,
    notifications
});