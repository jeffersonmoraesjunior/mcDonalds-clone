import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Home } from '../../screens/Home/index';
import Cupons from '../../screens/Cupons/index';
import logo from '../../assets/images/logo.png';
import cupom from '../../assets/images/icon_cupom.png';

const Tab = createBottomTabNavigator();

function BottomTabs() {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false
         }}>
         <Tab.Screen
            options={{
               tabBarIcon: ({ color }) => (
                  <Image
                     resizeMode="contain"
                     source={logo}
                     style={{ tintColor: color, width: 25 }}
                  />
               )
            }}
            name="Home"
            component={Home}
         />
         <Tab.Screen options={{
               tabBarIcon: ({ color }) => (
                  <Image
                     resizeMode="contain"
                     source={cupom}
                     style={{ tintColor: color, width: 25 }}
                  />
               )
            }} name="Cupons" component={Cupons} />
      </Tab.Navigator>
   );
}

export { BottomTabs };
