import { StyleSheet } from 'react-native';
import { ITEM_WIDTH, SLIDER_WIDTH } from './src/util/dimensions';

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      backgroundColor: '#ffffff'
   },
   imageContainer: {
      alignItems: 'center',
      marginVertical: 30
   },
   image: {
      width: 350,
      height: 300
   },
   cardCarousel: {
      width: ITEM_WIDTH,
      marginTop: 20
   },
   carouselImage: {
      resizeMode: 'cover',
      width: 'auto',
      height: 230,
      borderRadius: 0
   }
});

export default styles;
