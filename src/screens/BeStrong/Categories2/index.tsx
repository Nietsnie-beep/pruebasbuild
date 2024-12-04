import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleService,
  useStyleSheet,
  Icon,
  useTheme,
} from "@ui-kitten/components";

import { Text ,HStack, Container, VStack, Content } from "components";
import Header from "../element/Header";
import { SafeAreaView } from "react-native";


const Categories2 = React.memo(() => {
  const themes = useTheme();
  const { goBack } = useNavigation();
  const [indexselect, setIndexSelect] = React.useState<number>(0);
  const styles = useStyleSheet(themedStyles);

  const handlePress = React.useCallback((i: number) => {
    setIndexSelect(i);
  }, []);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <SafeAreaView>
      <Header
        accessoryLeft={{
          name: "x",
          colorIcon: "#8247E5",
        }}
        accessoryRight={{
          text: "Unlock All",
        }}
        style={{marginHorizontal:24}}
      />

      <Content>
        <VStack padding={24}>
          {data.map((item, i) => {
            let checked = i === indexselect;
            return (
              <VStack
                key={i}
                onPress={() => handlePress(i)}
                style={{
                  width: "100%",
                  padding: 24,
                  marginBottom: 16,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: checked
                    ? themes["color-primary-100"]
                    : themes["color-basic-900"],
                  position: "relative",
                }}
              >
                {checked && (
                  <HStack style={{ position: "absolute", top: 10, right: 10 }}>
                    <Icon
                      name="check"
                      pack="assets"
                      style={{ width: 16, height: 16 }}
                    />
                  </HStack>
                )}
                <Text category="h2" style={{fontFamily: item.font}}>You are strong you are enough</Text>
              </VStack>
            );
          })}
        </VStack>
      </Content>
      </SafeAreaView>
    </Container>
  );
});
export default Categories2;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
const data = [
 {
font : "AlbertSans-Bold"
 },
 {
  font : "Aldrich-Regular"
 },
 {
  font : "Alef-Bold"
 },
 {
  font : "AlegreyaSans-Bold"
 },
 {
  font : "Amiri-Regular"
 },


]
