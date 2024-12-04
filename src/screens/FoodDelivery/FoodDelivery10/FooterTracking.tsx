import React, { memo } from "react";
import { View, ImageRequireSource } from "react-native";
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Avatar,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import useLayout from "hooks/useLayout";

import Text from "components/Text";
import Animated from "react-native-reanimated";
import NavigationAction from "components/NavigationAction";

interface DataShipperProps {
  id: number;
  name: string;
  typeShipper: string;
  rateStar: number;
  avatar: ImageRequireSource;
}
interface FooterTrackingProps {
  shipper: DataShipperProps;
  distance: string;
  time: string;
}

const FooterTracking = memo(
  ({ shipper, distance, time }: FooterTrackingProps) => {
    const { goBack } = useNavigation();
    const { height, width, top, bottom } = useLayout();
    const theme = useTheme();
    const styles = useStyleSheet(themedStyles);
    const WIDTH = `${width}`;
    const HEIGHT = `${height}`;
    return (
      <Animated.View
        style={[styles.container, { width: width, height: height }]}
      >
        <Avatar
          source={shipper.avatar}
          /* @ts-ignore */
          style={styles.avatar}
        />
        <View style={styles.title}>
          <View>
            <Text category="h4" status="white">
              {shipper.name}
            </Text>
            <Text category="body" status={"white"}>
              {shipper.typeShipper}
            </Text>
          </View>
          <NavigationAction
            icon="phone_out"
            size="medium"
            backgroundColor={theme["text-primary-color"]}
            marginRight={6}
          />
        </View>
        <View style={styles.information}>
          <Text category="h7" status={"white"}>
            ⭐ {shipper.rateStar}
          </Text>
          <Text category="h7" status={"white"}>
            🛵 {distance}kms
          </Text>
          <Text category="h7" status={"white"}>
            ⏰ {time}
          </Text>
        </View>
      </Animated.View>
    );
  }
);

export default FooterTracking;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginBottom: 20,
  },
  avatar: {
    marginTop: -32,
    alignSelf: "center",
    marginBottom: 8,
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: "background-basic-color-1",
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
  },
});
