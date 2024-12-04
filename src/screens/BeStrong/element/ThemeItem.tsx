import * as React from "react";
import { useLayout } from "hooks";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { Icon } from "@ui-kitten/components";
import Images from "assets/images";

const ThemeItem = ({ icon, background }: any) => {
  return (
    <TouchableOpacity style={styles.container}>
       <View style={styles.imageContainer}>
        <ImageBackground
          /* @ts-ignore */
          source={Images.be_strong[background]}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.containerIcon}>
            <Icon name={icon} pack="assets" style={{ width: 16, height: 16 }} />
          </View>
        </ImageBackground>
        </View>
    </TouchableOpacity>
  );
};

export default ThemeItem;

const styles = StyleSheet.create({
  container: { width: 90, height: 160, marginLeft: 8},
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    overflow: "hidden"
  },
  containerIcon: {
    width: 32,
    height: 32,
    margin: 4,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
