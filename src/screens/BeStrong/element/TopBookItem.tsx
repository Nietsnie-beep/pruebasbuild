import * as React from "react";
import { Layout, useTheme } from "@ui-kitten/components";
import { useLayout } from "hooks";
import { Text, VStack } from "components";

const TopBookItem = ({ backgroundColor }: { backgroundColor: string }) => {
  const themes = useTheme();
  const { width } = useLayout();
  return (
    <Layout
      style={{
        height: 150,
        backgroundColor: backgroundColor,
        borderRadius: 16,
      }}
    >
      <VStack padding={24}>
        <Text category="h7" status="control">
          “Two things are infinite: the universe {"\n"} and human stupidity; and
          I'm not sure {"\n"} about the universe.”
        </Text>
        <Text
          category="subhead"
          style={{ color: themes["color-basic-800"] }}
          marginTop={16}
        >
          ― Albert Einstein
        </Text>
      </VStack>
    </Layout>
  );
};

export default TopBookItem;
