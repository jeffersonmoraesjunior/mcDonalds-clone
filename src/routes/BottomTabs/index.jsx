import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home/index';
import Cupons from '../../screens/Cupons/index';

const Tab = createBottomTabNavigator();

function BottomTabs() {
   return (
      <Tab.Navigator screenOptions={{
         headerShown: false,
      }}>
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Cupons" component={Cupons} />
      </Tab.Navigator>
   );
}

export { BottomTabs };
