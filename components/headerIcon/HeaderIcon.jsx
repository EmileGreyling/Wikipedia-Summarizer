import React from 'react';
import { Image, View } from 'react-native';
import styles from './headerIcon.style';


const HeaderIcon = ({ iconUrl }) => {
  return (
    <View style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg('100%')}
      />
    </View>
  );
};

export default HeaderIcon;
