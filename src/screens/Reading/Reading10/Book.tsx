import * as React from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';

import {Text, HStack, VStack} from 'components';

interface BookProps {
  image: ImageRequireSource;
  title: string;
  artist: string;
  duration: string;
}

const Book = React.memo(({item}: {item: BookProps}) => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <HStack mb={16} level="8" padding={16} border={8} justify="flex-start">
      <Image
        source={item.image}
        style={{
          width: 108 * (width / 375),
          height: 147 * (height / 812),
        }}
      />
      <VStack ml={16} style={{flex: 1, height: 147 * (height / 812)}}>
        <VStack>
          <Text category="h7" marginBottom={8} maxWidth={184 * (width / 375)}>
            {item.title}
          </Text>
          <Text category="subhead" status="placeholder">
            {item.artist}
          </Text>
        </VStack>
        <HStack>
          <HStack>
            <Icon pack="assets" name="headphones" />
            <Text>{item.duration}</Text>
          </HStack>
          <Icon pack="assets" name="bookmarks" />
        </HStack>
      </VStack>
    </HStack>
  );
});

export default Book;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
