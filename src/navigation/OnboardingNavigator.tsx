import React from 'react';
import Onboarding from 'screens/Onboarding/Onboarding';
import Onboarding01 from 'screens/Onboarding/Onboarding01';
import Onboarding02 from 'screens/Onboarding/Onboarding02';
import Onboarding03 from 'screens/Onboarding/Onboarding03';
import Onboarding04 from 'screens/Onboarding/Onboarding04';
import Onboarding05 from 'screens/Onboarding/Onboarding05';
import Onboarding06 from 'screens/Onboarding/Onboarding06';
import Onboarding07 from 'screens/Onboarding/Onboarding07';
import Onboarding08 from 'screens/Onboarding/Onboarding08';
import Onboarding09 from 'screens/Onboarding/Onboarding09';
import Onboarding10 from 'screens/Onboarding/Onboarding10';
import {OnboardingStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnbroadingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnboardingIntro">
      <Stack.Screen name="OnboardingIntro" component={Onboarding} />
      <Stack.Screen name="Onboarding01" component={Onboarding01} />
      <Stack.Screen name="Onboarding02" component={Onboarding02} />
      <Stack.Screen name="Onboarding03" component={Onboarding03} />
      <Stack.Screen name="Onboarding04" component={Onboarding04} />
      <Stack.Screen name="Onboarding05" component={Onboarding05} />
      <Stack.Screen name="Onboarding06" component={Onboarding06} />
      <Stack.Screen name="Onboarding07" component={Onboarding07} />
      <Stack.Screen name="Onboarding08" component={Onboarding08} />
      <Stack.Screen name="Onboarding09" component={Onboarding09} />
      <Stack.Screen name="Onboarding10" component={Onboarding10} />
    </Stack.Navigator>
  );
};
export default OnbroadingNavigator;
