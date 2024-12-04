import React from "react";
import {
  Icon,
  useTheme,
  Text,
  Layout,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { HStack, VStack } from "components";
import { useLayout } from "hooks";

const QuotesItem = ({ title, amount, status }: any) => {
  const themes = useTheme();
  const styles = useStyleSheet(themedStyles);
  const {width} = useLayout()

  const ToggleIcon = React.useCallback(() => {
    if (status !== undefined) {
      return !status ? (
        <VStack itemsCenter justify="center" style={{ width: 32, height: 32 }}>
          <Icon name="lock" pack="assets" style={{ width: 16, height: 16 }} />
        </VStack>
      ) : (
        <VStack itemsCenter justify="center" style={styles.containCheck}>
          <Icon name="checkw" pack="assets" style={{ width: 10, height: 7 }} />
        </VStack>
      );
    } else {
      return null;
    }
  }, [status, themes]);

  return (
    <Layout style={[styles.quotes,{width:164*(width/375)}]}>
      <HStack padding={16}>
        <VStack>
          <HStack
            itemsCenter
            justify="center"
            border={6}
            style={styles.containheart}
          >
            <Icon name="heart" pack="assets" style={styles.heart} />
          </HStack>
          <VStack mt={24} style={{ height: 40 }}>
            <Text category="h6">{title}</Text>
            <Text category="c2">{amount} Quotes</Text>
          </VStack>
        </VStack>
        {ToggleIcon()}
      </HStack>
    </Layout>
  );
};

export default QuotesItem;

const themedStyles = StyleService.create({
  quotes: {
    borderRadius: 12,
    backgroundColor: "color-basic-1000",
    flex: 1,
  },
  containheart: {
    width: 32,
    height: 32,
    backgroundColor: "color-primary-200",
  },
  heart: {
    width: 16,
    height: 16,
    tintColor: "color-basic-1100",
  },
  containCheck: {
    width: 40,
    height: 32,
    borderRadius: 12,
    backgroundColor: "color-basic-200",
  },
});
