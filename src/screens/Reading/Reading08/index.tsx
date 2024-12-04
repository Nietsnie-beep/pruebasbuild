import * as React from 'react';
import {Image, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Select,
  SelectItem,
  Icon,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, HStack, VStack} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';
import ProgressBar from 'components/ProgressBar';

const Reading08 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState();

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="2" style={[styles.header, {paddingTop: top + 8}]}>
        <HStack>
          <NavigationAction status="primary" />
          <NavigationAction icon="menu" status="primary" />
        </HStack>
        <Text category="h3" marginLeft={20}>
          Downloads
        </Text>
      </Layout>
      <HStack itemsCenter mh={16} mt={16}>
        <Text category="h6" status="platinum">
          {DATA_DOWNLOADING.length} books
        </Text>
        <Select
          style={styles.select}
          placeholder="Sort by"
          selectedIndex={selectedIndex}
          //@ts-ignore
          onSelect={index => setSelectedIndex(index)}>
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
      </HStack>
      <FlatList
        data={DATA_DOWNLOADING}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={keyExtractor}
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
                <HStack itemsCenter>
                  <HStack itemsCenter>
                    <Icon
                      pack="assets"
                      name="headphones"
                      style={styles.headphone}
                    />
                    <Text category="subhead" status="primary">
                      {item.duration}
                    </Text>
                  </HStack>
                  <Icon pack="assets" name="download" style={styles.download} />
                </HStack>
                <ProgressBar
                  progress={item.progress}
                  containColor={theme['background-basic-color-3']}
                />
              </VStack>
            </HStack>
          );
        }}
      />
    </Container>
  );
});

export default Reading08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  select: {
    width: '55%',
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: 8,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  headphone: {
    width: 14,
    height: 14,
    tintColor: 'text-primary-color',
    marginRight: 4,
  },
  download: {
    width: 24,
    height: 24,
    tintColor: 'text-basic-color',
  },
});
const DATA_DOWNLOADING = [
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook03,
    artist: 'June Cook',
    duration: '48 mins',
    progress: 5 / 10,
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook04,
    artist: 'June Cook',
    duration: '48 mins',
    progress: 5 / 10,
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook01,
    artist: 'June Cook',
    duration: '48 mins',
    progress: 5 / 10,
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    image: Images.reading.ebook06,
    artist: 'June Cook',
    duration: '48 mins',
    progress: 5 / 10,
  },
];
