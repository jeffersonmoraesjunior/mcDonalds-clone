import React from 'react';
import lupa from '../../assets/images/lupa.png';
import navHamburguer from '../../assets/images/nav-hamburguer.png';
import { View, Image, TextInput } from 'react-native';
import styles from './styles';

const EncontreCupons = () => {
   return (
      <View style={styles.container}>
         <Image source={lupa} style={styles.image} />
         <TextInput placeholder="Encontre cupons"  />
         <Image source={navHamburguer} style={styles.image} />
      </View>
   );
};

export { EncontreCupons };
