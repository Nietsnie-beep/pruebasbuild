import React from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
// ----------------------------- Components && Elements -----------------------
import { Content, HStack, Text } from "components";

interface TabBarProps {
  tabs: { title: string; icon: string }[];
  selectedTab: number;
  onSelect: React.Dispatch<React.SetStateAction<number>>;
}

const TabBar = React.memo(({ tabs, selectedTab, onSelect }: TabBarProps) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  return (
    <Content horizontal contentContainerStyle={styles.content}>
      {tabs.map((item, index) => {
        const _isActive = index === selectedTab;
        return (
          <HStack
            onPress={() => onSelect(index)}
            style={[
              styles.tab,
              {
                backgroundColor: _isActive
                  ? theme["color-corn-100"]
                  : theme["background-basic-color-2"],
              },
            ]}
            key={index + item.title}
            itemsCenter
            ph={16}
            pv={12}
          >
            <Icon
              pack="assets"
              name={item.icon}
              style={[
                styles.icon,
                _isActive && { tintColor: theme["text-basic-color"] },
              ]}
            />
            <Text
              marginLeft={8}
              category={_isActive ? "subhead" : "h8"}
              status={_isActive ? "basic" : "placeholder"}
            >
              {item.title}
            </Text>
          </HStack>
        );
      })}
    </Content>
  );
});

export default TabBar;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  tab: {
    borderRadius: 16,
    marginRight: 12,
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: "text-placeholder-color",
  },
});
