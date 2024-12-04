import * as React from "react";
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Input,
  Button,
} from "@ui-kitten/components";

import { Container, Content, Text, NavigationAction } from "components";

const Fitness08 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={
          <NavigationAction status="primary" icon="circles_four" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Text category="h2" marginTop={12}>
          Set RunningGoals
        </Text>
        <Text category="body" marginTop={10} marginBottom={40}>
          Define your goal and try to accomplish it!
        </Text>
        <Text category="h6" marginBottom={8}>
          Distance
        </Text>
        <Input
          accessoryRight={() => <Text children="km" category="subhead" />}
          keyboardType="numeric"
        />
        <Text category="h6" marginBottom={8} marginTop={32}>
          Time
        </Text>
        <Input
          accessoryRight={() => <Text children="min" category="subhead" />}
          keyboardType="numeric"
        />
        <Text category="h6" marginBottom={8} marginTop={32}>
          `` Steps
        </Text>
        <Input
          accessoryRight={() => <Text children="min" category="subhead" />}
          keyboardType="numeric"
        />
      </Content>
      <Button children={"SETUP GOAL"} style={styles.button} />
    </Container>
  );
});

export default Fitness08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
});
