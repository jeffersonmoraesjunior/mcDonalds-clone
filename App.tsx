import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { ITEM_WIDTH, SLIDER_WIDTH } from './src/util/dimensions';
import { BoxTextImage } from './src/components/BoxTextImage';
import { ScrollView } from 'react-native';
import { Header } from './src/components/Header/index';

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

const pecaretire = require('./src/assets/images/pecaRetire.jpeg');
const mcDelivery = require('./src/assets/images/mcDelivery.jpeg');
const meuMequi = require('./src/assets/images/meuMequi.jpeg');
const cupons = require('./src/assets/images/cupons.jpeg');
const cobrinhaMcmelt = require('./src/assets/images/cobrinhaMcmelt.jpeg');
const meusCuponsGerados = require('./src/assets/images/meusCuponsGerados.jpeg');
const restaurantes = require('./src/assets/images/restaurantes.jpeg');
const junteMequi = require('./src/assets/images/junteMequi.jpeg');

export default function App() {
   return (
      <View style={styles.container}>
         <StatusBar style="dark" />
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
}
