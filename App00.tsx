import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ITEM_WIDTH, SLIDER_WIDTH } from './src/util/dimensions';
import { Header } from './src/components/Header/index';
import { EncontreCupons } from './src/components/EncontreCupons';
import { CarouselCupons } from './src/components/CarouselCupons';
import styles from './styles';

type Props = {
   item: {
      image: any;
   };
   index: number;
};

const carouselItems = [
   {
      image: require('./src/assets/images/1.jpeg')
   },
   {
      image: require('./src/assets/images/2.jpeg')
   },
   {
      image: require('./src/assets/images/3.jpeg')
   }
];

function carouselCardItem({ item, index }: Props) {
   return (
      <View style={styles.cardCarousel} key={index}>
         <Image style={styles.carouselImage} source={item.image} />
      </View>
   );
}

export default function App() {
   return (
      <View style={styles.container}>
         <StatusBar style="auto" />
         <Header />
         <EncontreCupons />
         <ScrollView showsVerticalScrollIndicator={false}>
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
            <CarouselCupons text={'Recomendações para você 😍'} />
            <CarouselCupons text={'Você também pode gostar 😎'} />
            <CarouselCupons text={'Top 10 🏆'} />
            <CarouselCupons text={'Esquenta Méqui Friday 📼🎲'} />
         </ScrollView>
      </View>
   );
}
