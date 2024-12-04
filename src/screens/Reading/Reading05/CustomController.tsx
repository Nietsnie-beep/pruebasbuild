import * as React from "react";
import { View } from "react-native";
import {
  StyleService,
  useStyleSheet,
  Button,
  Icon,
  Spinner,
} from "@ui-kitten/components";
import { NavigationAction } from "components";

interface Props {
  pressPlayPause?(): void;
  pressNext?(): void;
  pressPrv?(): void;
  pressRedo?(): void;
  pressUndo?(): void;
  playPause: boolean;
  loading: boolean;
}

const CustomController = ({
  pressUndo,
  pressNext,
  pressPlayPause,
  pressPrv,
  pressRedo,
  playPause,
  loading,
}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container]}>
      <NavigationAction icon="caret_left" status="primary" onPress={pressPrv} />
      <NavigationAction icon="undo" status="primary" onPress={pressUndo} />
      {loading ? (
        <Spinner style={styles.spinner} />
      ) : (
        <Button
          status="purple"
          style={styles.play}
          size="giant"
          onPress={pressPlayPause}
          accessoryRight={
            <Icon pack="assets" name={playPause ? "pause" : "play"} />
          }
        />
      )}
      <NavigationAction icon="redo" status="primary" onPress={pressRedo} />
      <NavigationAction
        icon="caret_right"
        status="primary"
        onPress={pressNext}
      />
    </View>
  );
};

export default CustomController;

const themedStyles = StyleService.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 40,
    marginBottom: 32,
  },
  spinner: {
    width: 80,
    height: 80,
    borderRadius: 99,
  },
  play: {
    width: 80,
    height: 80,
    borderRadius: 99,
  },
});
