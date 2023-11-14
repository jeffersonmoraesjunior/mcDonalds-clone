import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './BottomTabs/index';

export const Routes = () => {
   return (
      <NavigationContainer>
         <BottomTabs />
      </NavigationContainer>
   );
};
