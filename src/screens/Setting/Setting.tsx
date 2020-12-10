import { Audio } from "expo-av";
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthContext } from '../../../App';
import LoadingComponent from '@components/Loading';
import { SettingStackParamList } from '@navigator/StackNavigator/SettingStack';
import SettingView, { SettingViewProps } from './SettingView';

type SettingScreenNavigationProp = StackNavigationProp<
  SettingStackParamList,
  'Setting'
>;

type Props = {
  navigation: SettingScreenNavigationProp;
};

interface Setting {
  loading: boolean;
};

const Setting: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState<Setting['loading']>(false);
  const { signOut } = React.useContext(AuthContext);

  const handleLogoutOnPress = React.useCallback<SettingViewProps['handleLogoutOnPress']>(() => {
    signOut();
  }, []);

  // const playSound
  // const soundObject = new Audio.Sound();
  //   try {
  //     await soundObject.loadAsync('https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3');
  //     await soundObject.playAsync();
  //     // Your sound is playing!

  //     // Don't forget to unload the sound from memory
  //     // when you are done using the Sound object
  //     await soundObject.unloadAsync();
  //   } catch (error) {
  //     // An error occurred!
  //   }

  // React.useEffect(() => {

  // }, [])
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <SettingView 
      handleLogoutOnPress={handleLogoutOnPress}
    />
  )
};

export default React.memo(Setting);