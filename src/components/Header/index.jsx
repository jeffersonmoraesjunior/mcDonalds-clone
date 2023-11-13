import React from 'react';
import logo from '../../assets/images/logo.png';
import { View, Image } from 'react-native';
import styles from './styles';

export const Header = () => {
   return (
      <View style={styles.boxTop}>
         <Image source={logo} style={styles.image} />
      </View>
   );
};
