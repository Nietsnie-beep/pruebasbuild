import * as React from 'react';
import {View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from '@ui-kitten/components';

import {RootStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import SplashScreen from 'screens/Spash/SplashScreen';
import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import SocialaNavigator from './SocialaNavigator';
import ProfileNavigator from './ProfileNavigator';
import FinanceaNavigator from './FinanceNavigator';
import ECommerceNavigator from './ECommerceNavigator';
import ReadingaNavigator from './ReadingNavigator';
import FitnessaNavigator from './FitnessNavigator';
import HealthaNavigator from './HealthNavigator';
import CryptoNavigator from './CryptoNavigator';
import FoodDeliveryNavigator from './FoodDeliveryNavigator';
import MenuStackNavigator from './MenuNavigator';
import BeStrongNavigator from './BeStrongNavigation';
import PricePlanNavigator from './PricePlanNavigator';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  const themes = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <View
        style={{backgroundColor: themes['background-basic-color-1'], flex: 1}}>
        <Stack.Navigator
          initialRouteName={'SplashScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="Social" component={SocialaNavigator} />
          <Stack.Screen name="Profile" component={ProfileNavigator} />
          <Stack.Screen name="FoodDelivery" component={FoodDeliveryNavigator} />
          <Stack.Screen name="Finance" component={FinanceaNavigator} />
          <Stack.Screen name="ECommerce" component={ECommerceNavigator} />
          <Stack.Screen name="Reading" component={ReadingaNavigator} />
          <Stack.Screen name="Fitness" component={FitnessaNavigator} />
          <Stack.Screen name="Health" component={HealthaNavigator} />
          <Stack.Screen name="Crypto" component={CryptoNavigator} />
          <Stack.Screen name="Menu" component={MenuStackNavigator}/>
          <Stack.Screen name="BeStrong" component={BeStrongNavigator}/>
          <Stack.Screen name="PricePlan" component={PricePlanNavigator}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
