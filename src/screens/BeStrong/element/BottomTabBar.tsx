import * as React from "react";
import { useLayout } from "hooks";
import {
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import { HStack, VStack } from "components";

const BottomTabBar = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { width } = useLayout();

  return (
    <HStack
      alignSelfCenter
      itemsCenter
      border={99}
      justify="space-around"
      pv={18}
      style={{
        position: "absolute",
        bottom: 35,
        width: 202 * (width / 375),
        backgroundColor: theme["background-basic-color-2"],
      }}
    >
      {TABS.map((item, index) => {
        const _active = selectedTab === index;
        return (
          <VStack
            key={index}
            onPress={() => {
              setSelectedTab(index);
            }}
          >
            <Icon
              name={item}
              pack="assets"
              style={{
                width: 20,
                height: 20,
                tintColor: _active
                  ? theme["text-primary-color"]
                  : theme["text-snow-color"],
              }}
            />
          </VStack>
        );
      })}
    </HStack>
  );
});

export default BottomTabBar;

const themedStyles = StyleService.create({});

const TABS = ["house_simple", "grid_four", "user_be_strong"];
