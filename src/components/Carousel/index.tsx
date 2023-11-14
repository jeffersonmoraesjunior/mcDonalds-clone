import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Image } from 'react-native';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../util/dimensions';
import styles from './styles';

type Props = {
   item: {
      image: any;
   };
   index: number;
};

const carouselItems = [
   {
      image: require('../../assets/images/1.jpeg')
   },
   {
      image: require('../../assets/images/2.jpeg')
   },
   {
      image: require('../../assets/images/3.jpeg')
   }
];

function carouselCardItem({ item, index }: Props) {
   return (
      <View style={styles.cardCarousel} key={index}>
         <Image style={styles.carouselImage} source={item.image} />
      </View>
   );
}

export const MyCarousel = () => {
   return (
      <View>
         <Carousel
            data={carouselItems}
            renderItem={carouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
            autoplayDelay={5000}
            autoplay={true}
            loop={true}
         />
      </View>
   );
};
