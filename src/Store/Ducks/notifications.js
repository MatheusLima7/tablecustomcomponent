
export const Types = {
    UPDATE_NOTIFICATIONS: 'login/UPDATE_NOTIFICATIONS'
  };
  
  const TEST_NOTIFICATIONS = [{
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
    read: false
  },{
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
    read: true
  }];
  
  const initialStateNotifications = [{
    details: []
  }];
  
  
  export default function notifications(state = initialStateNotifications, action) {
    switch (action.type) {
      case Types.UPDATE_NOTIFICATIONS:
        return TEST_NOTIFICATIONS;
      default:
        return state;
    }
  }
  
  
  export const Creators = {
  
    updateNotifications: payload => ({
      type: Types.UPDATE_NOTIFICATIONS,
      payload: payload,
    })
  
  };