import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
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
               tabBarIcon: ({ focused }) => (
                  <Image
                     resizeMode="contain"
                     source={logo}
                     style={{ tintColor: focused ? '#FFC72C' : '#b3b3b3', width: 25 }}
                  />
               ),
               tabBarLabel: ({ focused, color }) => (
                  <Text style={{ color: focused ? 'black' : color, fontSize: 12 }}>Home</Text>
               )
            }}
            name="Home"
            component={Home}
         />
         <Tab.Screen
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     resizeMode="contain"
                     source={cupom}
                     style={{ tintColor: focused ? '#FFC72C' : '#b3b3b3', width: 25 }}
                  />
               ),
               tabBarLabel: ({ focused, color }) => (
                  <Text style={{ color: focused ? 'black' : color, fontSize: 12 }}>Cupons</Text>
               )
            }}
            name="Cupons"
            component={Cupons}
         />
      </Tab.Navigator>
   );
}

export { BottomTabs };
