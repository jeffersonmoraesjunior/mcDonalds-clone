import { StyleSheet } from 'react-native';
import { ITEM_WIDTH } from '../../util/dimensions';

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: '100%',      
   },
   cardCarousel: {
      width: ITEM_WIDTH,
      marginTop: 10
   },
   carouselImage: {
      resizeMode: 'contain',
      width: 'auto',
      height: 300,
      borderRadius: 0
   }
});

export default styles;
