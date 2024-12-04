import { createStackNavigator } from "@react-navigation/stack";
import React, { memo } from "react";
import Home from "screens/Menu/Home";
import Menu01 from "screens/Menu/Menu01";
import Menu02 from "screens/Menu/Menu02";
import Menu03 from "screens/Menu/Menu03";
import Menu04 from "screens/Menu/Menu04";
import Menu05 from "screens/Menu/Menu05";
import Menu06 from "screens/Menu/Menu06";
import Menu07 from "screens/Menu/Menu07";
import Menu08 from "screens/Menu/Menu08";
import Menu09 from "screens/Menu/Menu09";
import Menu10 from "screens/Menu/Menu10";
import { MenuStackParamList } from "./navigation-types";

const Stack = createStackNavigator<MenuStackParamList>();

const MenuStackNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu01" component={Menu01} />
      <Stack.Screen name="Menu02" component={Menu02} />
      <Stack.Screen name="Menu03" component={Menu03} />
      <Stack.Screen name="Menu04" component={Menu04} />
      <Stack.Screen name="Menu05" component={Menu05} />
      <Stack.Screen name="Menu06" component={Menu06} />
      <Stack.Screen name="Menu07" component={Menu07} />
      <Stack.Screen name="Menu08" component={Menu08} />
      <Stack.Screen name="Menu09" component={Menu09} />
      <Stack.Screen name="Menu10" component={Menu10} />
    </Stack.Navigator>
  );
});
export default MenuStackNavigator;
