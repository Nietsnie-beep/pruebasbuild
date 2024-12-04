import * as React from "react";
import { useLayout } from "hooks";
import {
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";

import { Text, HStack } from "components";
import { ViewStyle } from "react-native";
interface IBannerAdsProps {
  style?: ViewStyle ;
}


const BannerAds = React.memo(( {style}: IBannerAdsProps ) => {
  const styles = useStyleSheet(themedStyles);
  const { height, width, top, bottom } = useLayout();

  return (
    <HStack
      itemsCenter
      justify="center"
      style={[styles.button, { width: width - 32 } , style]}
    >
      <Text category="h6">Banner Ads</Text>
    </HStack>
  );
});
export default BannerAds;

const themedStyles = StyleService.create({
    button: {
        alignSelf: "center",
        height: 64,
        borderRadius: 12,
        backgroundColor: "color-corn-100",
      },
});
