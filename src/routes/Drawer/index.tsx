import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../screens/Home/index';
import Cupons from '../../screens/Cupons/index';

const Drawer = createDrawerNavigator();

function MyDrawer() {
   return (
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={Home} />
         <Drawer.Screen name="Cupons" component={Cupons} />
      </Drawer.Navigator>
   );
}

export { MyDrawer };
