import { StyleSheet } from 'react-native';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../util/dimensions';

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 10,
      marginTop: 50,
      border: '1px solid #000990'
   },
   textCarousel: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000'
   },
   cardCarousel: {
      width: 180,
      marginTop: 10
   },
   carouselImage: {
      resizeMode: 'cover',
      width: 'auto',
      height: 150,
      marginRight: 10
   }
});

export default styles;
