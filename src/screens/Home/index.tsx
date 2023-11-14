import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../util/dimensions';
import { Header } from '../../components/Header/index';
import { EncontreCupons } from '../../components/EncontreCupons';
import { CarouselCupons } from '../../components/CarouselCupons';
import { BoxTextImage } from '../../components/BoxTextImage';
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

const pecaretire = require('../../assets/images/pecaRetire.jpeg');
const mcDelivery = require('../../assets/images/mcDelivery.jpeg');
const meuMequi = require('../../assets/images/meuMequi.jpeg');
const cupons = require('../../assets/images/cupons.jpeg');
const cobrinhaMcmelt = require('../../assets/images/cobrinhaMcmelt.jpeg');
const meusCuponsGerados = require('../../assets/images/meusCuponsGerados.jpeg');
const restaurantes = require('../../assets/images/restaurantes.jpeg');
const junteMequi = require('../../assets/images/junteMequi.jpeg');

export const Home = () => {
   return (
      <View style={styles.container}>
         <StatusBar style="auto" />
         <Header />
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
            <View style={styles.imageContainer}>
               <Image source={junteMequi} style={styles.image} />
            </View>
            <View style={{ marginBottom: 100 }}>
               <BoxTextImage image={pecaretire} text={'Peça e Retire'} />
               <BoxTextImage image={mcDelivery} text={'McDelivery'} />
               <BoxTextImage image={meuMequi} text={'Meu Méqui'} />
               <BoxTextImage image={cupons} text={'Cupons'} />
               <BoxTextImage image={cobrinhaMcmelt} text={'Cobrinha McMelt'} />
               <BoxTextImage image={meusCuponsGerados} text={'Meus Cupons Gerados'} />
               <BoxTextImage image={restaurantes} text={'Restaurantes'} />
            </View>
         </ScrollView>
      </View>
   );
};
