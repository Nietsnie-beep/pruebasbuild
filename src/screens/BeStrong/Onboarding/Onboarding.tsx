import * as React from "react";
import { StyleService, useStyleSheet, useTheme } from "@ui-kitten/components";

import { Container } from "components";
import { Image, TouchableOpacity, View } from "react-native";
import Images from "assets/images";
import { goBack } from "navigation/RootNavigation";

const Onboarding = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <View style={styles.containImage}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={Images.be_strong.onboarding}
            resizeMode="cover"
            //@ts-ignore
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
});
export default Onboarding;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containImage: {
    width: 143,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
