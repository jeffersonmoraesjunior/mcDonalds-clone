import React from 'react';
import { Text, View, Image } from 'react-native';
// import img from '../../assets/images/4.jpeg';
import styles from './styles';

const BoxTextImage = ({ image, text }) => {
   return (
      <View style={styles.container}>
         <View style={styles.boxText}>
            <Text style={styles.text}>{text}</Text>
         </View>
         <Image source={image} style={styles.cardImg} />
      </View>
   );
};

export { BoxTextImage };
