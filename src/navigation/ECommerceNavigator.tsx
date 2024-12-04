import React from 'react';

import {ECommerceStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ECommerceIntro from 'screens/ECommerce/ECommerceIntro';
import ECommerce01 from 'screens/ECommerce/ECommerce01';
import ECommerce02 from 'screens/ECommerce/ECommerce02';
import ECommerce03 from 'screens/ECommerce/ECommerce03';
import ECommerce04 from 'screens/ECommerce/ECommerce04';
import ECommerce05 from 'screens/ECommerce/ECommerce05';
import ECommerce06 from 'screens/ECommerce/ECommerce06';
import ECommerce07 from 'screens/ECommerce/ECommerce07';
import ECommerce08 from 'screens/ECommerce/ECommerce08';
import ECommerce09 from 'screens/ECommerce/ECommerce09';
import ECommerce10 from 'screens/ECommerce/ECommerce10';

const Stack = createNativeStackNavigator<ECommerceStackParamList>();

const ECommerceNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ECommerceIntro">
      <Stack.Screen name="ECommerceIntro" component={ECommerceIntro} />
      <Stack.Screen name="ECommerce01" component={ECommerce01} />
      <Stack.Screen name="ECommerce02" component={ECommerce02} />
      <Stack.Screen name="ECommerce03" component={ECommerce03} />
      <Stack.Screen name="ECommerce04" component={ECommerce04} />
      <Stack.Screen name="ECommerce05" component={ECommerce05} />
      <Stack.Screen name="ECommerce06" component={ECommerce06} />
      <Stack.Screen name="ECommerce07" component={ECommerce07} />
      <Stack.Screen name="ECommerce08" component={ECommerce08} />
      <Stack.Screen name="ECommerce09" component={ECommerce09} />
      <Stack.Screen name="ECommerce10" component={ECommerce10} />
    </Stack.Navigator>
  );
};
export default ECommerceNavigator;
