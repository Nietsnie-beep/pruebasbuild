import React from 'react';

import {AuthStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthIntro from 'screens/Auth/AuthIntro';
import SignIn01 from 'screens/Auth/SignIn01';
import SignIn02 from 'screens/Auth/SignIn02';
import SignIn03 from 'screens/Auth/SignIn03';
import SignUp01 from 'screens/Auth/SignUp01';
import SignUp02 from 'screens/Auth/SignUp02';
import SignUp03 from 'screens/Auth/SignUp03';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import Verify from 'screens/Auth/Verify';
import CreateAccount from 'screens/Auth/CreateAccount';
import Authenticate from 'screens/Auth/Authenticate';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthIntro">
      <Stack.Screen name="AuthIntro" component={AuthIntro} />
      <Stack.Screen name="SignIn01" component={SignIn01} />
      <Stack.Screen name="SignIn02" component={SignIn02} />
      <Stack.Screen name="SignIn03" component={SignIn03} />
      <Stack.Screen name="SignUp01" component={SignUp01} />
      <Stack.Screen name="SignUp02" component={SignUp02} />
      <Stack.Screen name="SignUp03" component={SignUp03} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='Verify' component={Verify} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} />
      <Stack.Screen name='Authenticate' component={Authenticate} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
