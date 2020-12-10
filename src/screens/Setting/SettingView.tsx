import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps, Card, Icon, ListItem, ListItemProps } from 'react-native-elements';

import styles from './styles';
import DropdownComponent from '@components/DropdownComponent';

export interface SettingViewProps {
  handleLogoutOnPress: Exclude<ButtonProps['onPress'], undefined>;
};

const SettingView: React.ComponentType<SettingViewProps> = (props) => {
  const { 
    handleLogoutOnPress,
  } = props;
  
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center' }}>
  //     {/* <View style={{ marginVertical: 16 }} /> */}
  //     <View style={{ width: '50%', alignSelf: 'center'}}>
  //       <Button
  //         icon={<Icon name='input' color='#ffffff' />}
  //         buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
  //         onPress={handleLogoutOnPress}
  //         title='Log Out' 
  //       />
  //     </View>
  //   </View>
  // );

  

  return (
    <View style={styles.container}>
      <ListItem 
        containerStyle={{ padding: 32, margin: 32, backgroundColor: 'pink' }} 
        style={{ backgroundColor: 'yellow'}}
      >
        <Icon
          name='world-o'
          type='fontisto'
          size={48}
        />
        <View style={{ marginHorizontal: 16 }}/>
        <ListItem.Content style={{ flex: 0.8 }}>

          <ListItem.Title style={{ fontWeight: 'bold' }}>
            Languages
          </ListItem.Title>

        </ListItem.Content>

        <DropdownComponent
          items={[{ label: 'Chinese', value: 'chinese'}]}
          onValueChange={()=> {}}
          value={"chinese"}
        />
      </ListItem>
    </View>
  )
}
export default React.memo(SettingView);