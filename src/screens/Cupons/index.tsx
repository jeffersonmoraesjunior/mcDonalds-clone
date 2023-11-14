import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { Header } from '../../components/Header/index';
import { EncontreCupons } from '../../components/EncontreCupons';
import { CarouselCupons } from '../../components/CarouselCupons';
import styles from './styles';
import { MyCarousel } from '../../components/Carousel';

export default function Cupons() {
   return (
      <View style={styles.container}>
         <StatusBar style="auto" />
         <Header />
         <EncontreCupons />
         <ScrollView showsVerticalScrollIndicator={false}>
            <MyCarousel />
            <View style={{ marginBottom: 120 }}>
               <CarouselCupons text={'Recomendações para você 😍'} />
               <CarouselCupons text={'Você também pode gostar 😎'} />
               <CarouselCupons text={'Top 10 🏆'} />
               <CarouselCupons text={'Esquenta Méqui Friday 📼🎲'} />
            </View>
         </ScrollView>
      </View>
   );
}
