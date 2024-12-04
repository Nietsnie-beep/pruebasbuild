import * as React from "react";
import { FlatList } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from "@ui-kitten/components";

import { Container, NavigationAction } from "components";
import { OnboardingStackParamList } from "navigation/navigation-types";

interface ButtonProps {
  name: string;
  navigate: keyof OnboardingStackParamList;
}

const Onboarding = React.memo(() => {
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    { name: "01", navigate: "Onboarding01" },
    { name: "02", navigate: "Onboarding02" },
    { name: "03", navigate: "Onboarding03" },
    { name: "04", navigate: "Onboarding04" },
    { name: "05", navigate: "Onboarding05" },
    { name: "06", navigate: "Onboarding06" },
    { name: "07", navigate: "Onboarding07" },
    { name: "08", navigate: "Onboarding08" },
    { name: "09", navigate: "Onboarding09" },
    { name: "10", navigate: "Onboarding10" },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={"Onboarding"}
        accessoryLeft={<NavigationAction status="placeholder" />}
      />
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => {
          return (
            <Button
              status="primary"
              size="large"
              children={item.name}
              style={styles.button}
              onPress={() => {
                navigate(item.navigate);
              }}
            />
          );
        }}
      />
    </Container>
  );
});

export default Onboarding;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingHorizontal: 24,
  },
  button: {
    marginBottom: 16,
    borderRadius: 16,
  },
});
