import React, { Component } from "react";
import { Image } from 'react-native';
import { 
  createStackNavigator, 
  createSwitchNavigator, 
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Provider } from 'react-redux';
import store from '../Store';

import Clients from '../Pages/Clients';

const Navigation = createStackNavigator(
  {
    Clients: {
      screen: Clients
    },
  },
  {
    headerMode: "none"
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
    {
      Navigation: Navigation
    },
    {
      initialRouteName: 'Navigation',
      header: null,
    }
  ))

  export default class App extends React.Component {
    render() {
        return  <Provider store={store}>
                    <AppContainer />
                </Provider>;
    }
  }