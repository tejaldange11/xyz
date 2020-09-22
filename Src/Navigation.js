import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Test1 from './Test1';

const NaviAppStack = createStackNavigator(
  {
    Test1: Test1,
  },
  {
    initialRouteName: 'Test1',
  },
);

export default createAppContainer(NaviAppStack);
