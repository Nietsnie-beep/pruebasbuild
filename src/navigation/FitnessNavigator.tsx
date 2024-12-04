import React from 'react';

import {FitnessStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FitnessIntro from 'screens/Fitness/FitnessIntro';
import Fitness01 from 'screens/Fitness/Fitness01';
import Fitness02 from 'screens/Fitness/Fitness02';
import Fitness03 from 'screens/Fitness/Fitness03';
import Fitness04 from 'screens/Fitness/Fitness04';
import Fitness05 from 'screens/Fitness/Fitness05';
import Fitness06 from 'screens/Fitness/Fitness06';
import Fitness07 from 'screens/Fitness/Fitness07';
import Fitness08 from 'screens/Fitness/Fitness08';
import Fitness09 from 'screens/Fitness/Fitness09';
import Fitness10 from 'screens/Fitness/Fitness10';

const Stack = createNativeStackNavigator<FitnessStackParamList>();

const FitnessaNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="FitnessIntro">
      <Stack.Screen name="FitnessIntro" component={FitnessIntro} />
      <Stack.Screen name="Fitness01" component={Fitness01} />
      <Stack.Screen name="Fitness02" component={Fitness02} />
      <Stack.Screen name="Fitness03" component={Fitness03} />
      <Stack.Screen name="Fitness04" component={Fitness04} />
      <Stack.Screen name="Fitness05" component={Fitness05} />
      <Stack.Screen name="Fitness06" component={Fitness06} />
      <Stack.Screen name="Fitness07" component={Fitness07} />
      <Stack.Screen name="Fitness08" component={Fitness08} />
      <Stack.Screen name="Fitness09" component={Fitness09} />
      <Stack.Screen name="Fitness10" component={Fitness10} />
    </Stack.Navigator>
  );
};
export default FitnessaNavigator;
