import React from 'react';

import LoginStack from '@navigator/StackNavigator/LoginStack';
import RootTab from './TabNavigator/RootTab';

interface NavigatorProps {
  userToken: string
};

const Navigator: React.ComponentType<NavigatorProps> = ({ userToken }) => {
  return (
    // userToken === '' ? (
    //   <LoginStack />
    // ) : (
    //   <RootTab />
    // )
    <RootTab />
  );
};

export default Navigator;