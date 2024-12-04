import React from 'react';

import {PricePlanStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PricePlanIntro from 'screens/PricePlan/PricePlanIntro';
import PricePlan01 from 'screens/PricePlan/PricePlan01';
import PricePlan02 from 'screens/PricePlan/PricePlan02';
import PricePlan03 from 'screens/PricePlan/PricePlan03';
import PricePlan04 from 'screens/PricePlan/PricePlan04';
import PricePlan05 from 'screens/PricePlan/PricePlan05';
import PricePlan06 from 'screens/PricePlan/PricePlan06';
import PricePlan07 from 'screens/PricePlan/PricePlan07';
import PricePlan08 from 'screens/PricePlan/PricePlan08';
import PricePlan09 from 'screens/PricePlan/PricePlan09';
import PricePlan10 from 'screens/PricePlan/PricePlan10';


const Stack = createNativeStackNavigator<PricePlanStackParamList>();

const PricePlanaNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="PricePlanIntro">
      <Stack.Screen name="PricePlanIntro" component={PricePlanIntro} />
      <Stack.Screen name="PricePlan01" component={PricePlan01} />
      <Stack.Screen name="PricePlan02" component={PricePlan02} />
      <Stack.Screen name="PricePlan03" component={PricePlan03} />
      <Stack.Screen name="PricePlan04" component={PricePlan04} />
      <Stack.Screen name="PricePlan05" component={PricePlan05} />
      <Stack.Screen name="PricePlan06" component={PricePlan06} />
      <Stack.Screen name="PricePlan07" component={PricePlan07} />
      <Stack.Screen name="PricePlan08" component={PricePlan08} />
      <Stack.Screen name="PricePlan09" component={PricePlan09} />
      <Stack.Screen name="PricePlan10" component={PricePlan10} />
    </Stack.Navigator>
  );
};
export default PricePlanaNavigator;
