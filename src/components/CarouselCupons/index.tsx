import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from './styles';
import { shuffle } from 'lodash';

type Props = {
   item: {
      image: any;
   };
   index: number;
};

const carouselItems = [
   {
      image: require('../../assets/images/carouselCupons/1.jpeg')
   },
   {
      image: require('../../assets/images/carouselCupons/2.jpeg')
   },
   {
      image: require('../../assets/images/carouselCupons/3.jpeg')
   },
   {
      image: require('../../assets/images/carouselCupons/4.jpeg')
   },
   {
      image: require('../../assets/images/carouselCupons/5.jpeg')
   }
];

function carouselCardItem({ item, index }: Props) {
   return (
      <View style={styles.cardCarousel} key={index}>
         <Image style={styles.carouselImage} source={item.image} />
      </View>
   );
}
const imagensAleatorias = shuffle(carouselItems);

const CarouselCupons = ({ text }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.textCarousel}>{text}</Text>
         <FlatList horizontal={true} data={imagensAleatorias} renderItem={carouselCardItem} />
      </View>
   );
};

export { CarouselCupons };
