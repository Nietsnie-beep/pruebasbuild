import React from 'react';

import {FoodDeliveryStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDelivery01 from 'screens/FoodDelivery/FoodDelivery01';
import FoodDelivery02 from 'screens/FoodDelivery/FoodDelivery02';
import FoodDelivery03 from 'screens/FoodDelivery/FoodDelivery03';
import FoodDelivery04 from 'screens/FoodDelivery/FoodDelivery04';
import FoodDelivery05 from 'screens/FoodDelivery/FoodDelivery05';
import FoodDelivery06 from 'screens/FoodDelivery/FoodDelivery06';
import FoodDelivery07 from 'screens/FoodDelivery/FoodDelivery07';
import FoodDelivery08 from 'screens/FoodDelivery/FoodDelivery08';
import FoodDelivery09 from 'screens/FoodDelivery/FoodDelivery09';
import FoodDelivery10 from 'screens/FoodDelivery/FoodDelivery10';
import FoodDeliveryIntro from 'screens/FoodDelivery/FoodDeliveryIntro';

const Stack = createNativeStackNavigator<FoodDeliveryStackParamList>();

const FoodDeliveryaNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="FoodDeliveryIntro">
      <Stack.Screen name="FoodDeliveryIntro" component={FoodDeliveryIntro} />
      <Stack.Screen name="FoodDelivery01" component={FoodDelivery01} />
      <Stack.Screen name="FoodDelivery02" component={FoodDelivery02} />
      <Stack.Screen name="FoodDelivery03" component={FoodDelivery03} />
      <Stack.Screen name="FoodDelivery04" component={FoodDelivery04} />
      <Stack.Screen name="FoodDelivery05" component={FoodDelivery05} />
      <Stack.Screen name="FoodDelivery06" component={FoodDelivery06} />
      <Stack.Screen name="FoodDelivery07" component={FoodDelivery07} />
      <Stack.Screen name="FoodDelivery08" component={FoodDelivery08} />
      <Stack.Screen name="FoodDelivery09" component={FoodDelivery09} />
      <Stack.Screen name="FoodDelivery10" component={FoodDelivery10} />
    </Stack.Navigator>
  );
};
export default FoodDeliveryaNavigator;
