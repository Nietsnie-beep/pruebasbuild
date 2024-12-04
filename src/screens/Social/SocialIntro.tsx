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
import { SocialStackParamList } from "navigation/navigation-types";

interface ButtonProps {
  name: string;
  navigate: keyof SocialStackParamList;
}

const SocialIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<SocialStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    { name: "01. New Feed", navigate: "Social01" },
    { name: "02. Search", navigate: "Social02" },
    { name: "03. Home - View photo, video", navigate: "Social03" },
    { name: "04. Home - Raise", navigate: "Social04" },
    { name: "05. View 24h story", navigate: "Social05" },
    { name: "06. Find friend", navigate: "Social06" },
    { name: "07. Message - Contact", navigate: "Social07" },
    { name: "08. Messenger - Conversation", navigate: "Social08" },
    { name: "09. Messenger - Send photo, voice", navigate: "Social09" },
    { name: "10. Messenger - Video call", navigate: "Social10" },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={"Social"}
        accessoryLeft={<NavigationAction status="placeholder" />}
      />
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => {
          return (
            <Button
              status="primary"
              size='large'
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

export default SocialIntro;

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
