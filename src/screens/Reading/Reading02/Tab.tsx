import * as React from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {useLayout} from 'hooks';
import {Layout, StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import {Text, VStack, HStack} from 'components';

interface BookProps {
  image: ImageRequireSource;
  title: string;
  time: string;
  type: string;
}

interface TabProps {
  data: BookProps[];
}

const Tab = React.memo(({data}: TabProps) => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const width_item = (width - 47) / 2;
  return (
    <HStack style={[styles.container]} wrap>
      {data &&
        data.map((item, i) => {
          return (
            <VStack key={i} style={[{width: width_item}]} mb={16}>
              <Image source={item.image} />
              <Layout level="12" style={styles.tag}>
                <Text status="white" uppercase category="s2">
                  {item.type}
                </Text>
              </Layout>
              <Text category="h7" marginBottom={8}>
                {item.title}
              </Text>
              <HStack itemsCenter>
                <Text category="subhead">{item.time}</Text>
                <Icon pack="assets" name="bookmark" style={styles.bookmark} />
              </HStack>
            </VStack>
          );
        })}
    </HStack>
  );
});

export default Tab;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  tag: {
    borderRadius: 99,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  bookmark: {
    tintColor: 'text-secondary-color',
    width: 16,
    height: 16,
  },
});
