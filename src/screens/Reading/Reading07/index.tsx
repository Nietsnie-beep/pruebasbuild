import * as React from 'react';
import {Image, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {Layout, StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import {Container, Text, NavigationAction, HStack, VStack} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Reading07 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="3" style={[styles.header, {paddingTop: top + 8}]}>
        <HStack>
          <NavigationAction status="primary" />
          <NavigationAction icon="plus_circle" status="primary" />
        </HStack>
        <Text category="h3" marginLeft={20}>
          Finance Personal
        </Text>
      </Layout>
      <FlatList
        keyExtractor={keyExtractor}
        data={DATA}
        ListHeaderComponent={() => (
          <Text category="h6" status="platinum" marginBottom={16}>
            {DATA.length} Books
          </Text>
        )}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => {
          return (
            <HStack
              mb={16}
              level="2"
              padding={16}
              border={8}
              justify="flex-start">
              <Image
                source={item.image}
                style={{
                  width: 108 * (width / 375),
                  height: 147 * (height / 812),
                }}
              />
              <VStack ml={16} style={{flex: 1, height: 147 * (height / 812)}}>
                <VStack>
                  <Text
                    category="h7"
                    marginBottom={8}
                    maxWidth={184 * (width / 375)}>
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
        }}
      />
    </Container>
  );
});

export default Reading07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: 8,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

const DATA = [
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook03,
    artist: 'June Cook',
    duration: '48 mins',
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook04,
    artist: 'June Cook',
    duration: '48 mins',
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook01,
    artist: 'June Cook',
    duration: '48 mins',
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook06,
    artist: 'June Cook',
    duration: '48 mins',
  },
];
