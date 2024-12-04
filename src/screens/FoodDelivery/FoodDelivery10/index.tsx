import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
  Icon,
} from "@ui-kitten/components";

import { Container, NavigationAction } from "components";
import MapView, {
  Polyline,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import useToggle from "hooks/useToggle";
import Animated, {
  useDerivedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import CustomPin from "./CustomPin";
import StartPin from "./StartPin";
import Images from "assets/images";
import FooterTracking from "./FooterTracking";
import { Platform } from "react-native";

const FoodDelivery10 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const refMap = React.useRef<MapView | null>(null);

  const startLocation = { latitude: 37.7733358, longitude: -122.4161628 };
  const myLocation = { latitude: 37.7583358, longitude: -122.4262328 };
  const destination = {
    latitude: 37.7727554036838,
    longitude: -122.40456238389014,
  };
  const endLocation = { latitude: 37.7583358, longitude: -122.4425687 };

  const [showMore, setShowMore] = useToggle(false);

  const progress = useDerivedValue(() => {
    return showMore ? withSpring(1) : withTiming(0);
  }, [showMore]);

  const styleBottom = useAnimatedStyle(() => {
    const heighBtn = interpolate(
      progress.value,
      [0, 1],
      [height / 1.5, height / 3],
      Extrapolate.EXTEND
    );
    return {
      position: "absolute",
      bottom: -heighBtn,
    };
  }, [progress.value]);

  const _onMore = () => {
    setShowMore();
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="black" />}
        appearance="control"
      />
      <MapView
        ref={refMap}
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.7583358,
          longitude: -122.4262328,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0531,
        }}
        onPress={(e) => console.log(e.nativeEvent.coordinate)}
        customMapStyle={customMapStyle}
      >
        <>
          <Polyline
            coordinates={[endLocation, myLocation, startLocation, destination]}
            strokeColor={theme["background-basic-color-5"]}
            strokeWidth={2}
            lineDashPattern={[2, 4, 6, 8, 10]}
          />
          <StartPin coordinate={endLocation} />
          <CustomPin icon="shop" coordinate={destination} />
          <CustomPin icon="motorcycle" coordinate={myLocation} size="medium" />
        </>
      </MapView>
      <Animated.View style={styleBottom}>
        <FooterTracking
          shipper={SHIPPER}
          distance={"10"}
          time={"15-20 minitues"}
        />
      </Animated.View>
      <Button
        accessoryLeft={<Icon pack="assets" name="message" />}
        children="Check details"
        status="transparent-primary"
        style={[styles.more, { bottom: bottom + 24 }]}
        onPress={_onMore}
      />
    </Container>
  );
});

export default FoodDelivery10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: "transparent",
  },
  mapView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -10,
    bottom: 0,
  },
  more: {
    bottom: 0,
    position: "absolute",
    left: 24,
    right: 24,
    backgroundColor: "background-basic-color-1",
  },
});
const SHIPPER = {
  id: 0,
  name: "Le Thanh Hai",
  typeShipper: "Food-Shipper",
  rateStar: 10,
  avatar: Images.avatar.avatar04,
};
export const customMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#FFFFFF",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "rgba(40, 67, 95, 1)",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#FFFFFF",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "rgba(40, 67, 95, 1)",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "rgba(40, 67, 95, 1)",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#FFFFFF",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FFFFFF",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#E9EAEB",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#28435F",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#28435F",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#28435F",
      },
    ],
  },
];
