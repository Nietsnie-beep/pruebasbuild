import * as React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Layout,
  StyleService,
  useStyleSheet,
  Button,
  useTheme,
} from "@ui-kitten/components";

import { Text, HStack, Container, VStack } from "components";
import Images from "assets/images";

const Success = React.memo(() => {
  const themes = useTheme();
  const { goBack } = useNavigation();

  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <Layout style={{ paddingHorizontal: 24, marginTop: 60 }}>
        <VStack itemsCenter>
          <Text category="h1">Success</Text>
          <Text marginTop={8} category="body" center style={{color: themes[ "color-basic-300"]}}>
            Establish your own food awards and{"\n"}share your favourites with
            you
          </Text>
        </VStack>

        <Image
          source={Images.be_strong.success}
          resizeMode="cover"
           // @ts-ignore
          style={styles.image}
        />

        <Text center category="body" style={{color: themes[ "color-basic-600"]}} >Check your order</Text>
        <Button
          onPress={()=> goBack()}
          children="Back to homepage"
          style={{ width: 188, height: 48, marginTop: 28, alignSelf: "center" }}
        />
      </Layout>
    </Container>
  );
});
export default Success;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  image: {
    width: 330,
    height: 324,
    marginTop: 32,
    marginBottom: 60,
  },
});
