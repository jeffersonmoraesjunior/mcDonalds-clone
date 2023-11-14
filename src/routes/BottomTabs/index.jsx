import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home/index';
import Cupons from '../../screens/Cupons/index';

const Tab = createBottomTabNavigator();

function BottomTabs() {
   return (
      <Tab.Navigator>
         <Tab.Screen name="home" component={Home} />
         <Tab.Screen name="cupons" component={Cupons} />
      </Tab.Navigator>
   );
}

export { BottomTabs };
