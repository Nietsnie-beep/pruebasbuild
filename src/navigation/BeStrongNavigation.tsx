import React from "react";

import { BeStrongStackParamList } from "./navigation-types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "screens/BeStrong/SignIn";
import Menu from "screens/BeStrong/Menu";
import Categories from "screens/BeStrong/Categories";
import QuotesDetails from "screens/BeStrong/Quotesdetails";
import HomePage from "screens/BeStrong/Homepage";
import Quotes_Details from "screens/BeStrong/Quotes_Details";
import Categories2 from "screens/BeStrong/Categories2";
import Success from "screens/BeStrong/success";
import Author from "screens/BeStrong/Author";
import Categories1 from "screens/BeStrong/Categories1";
import Categories3 from "screens/BeStrong/Categories3";
import UpgradePremium from "screens/BeStrong/UpgradePremium";
import Onboarding from "screens/BeStrong/Onboarding/Onboarding";

const Stack = createNativeStackNavigator<BeStrongStackParamList>();

const BeStrongNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="QuotesDetails" component={QuotesDetails} />
      <Stack.Screen name="Categories1" component={Categories1} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Quotes_Details" component={Quotes_Details} />
      <Stack.Screen name="Author" component={Author} />
      <Stack.Screen name="Categories2" component={Categories2} />
      <Stack.Screen name="Categories3" component={Categories3} />
      <Stack.Screen name="UpgradePremium" component={UpgradePremium} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};
export default BeStrongNavigator;
