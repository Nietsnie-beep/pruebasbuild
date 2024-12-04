import * as React from 'react';
import {Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Button,
} from '@ui-kitten/components';

import {
  Container,
  Text,
  NavigationAction,
  HStack,
  VStack,
  IDivider,
} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';
import ProgressBar from 'components/ProgressBar';

const Social04 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const width_img = 343 * (width / 375);
  const height_img = 206 * (height / 812);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={{paddingTop: top + 8, ...styles.top}} level="5">
        <HStack>
          <NavigationAction
            icon="arrow_left"
            status="transparent"
            size="giant"
          />
          <NavigationAction
            icon="notification"
            status="transparent"
            size="giant"
          />
        </HStack>
        <Text category="h3" status="white" marginLeft={16} marginBottom={16}>
          Explore
        </Text>
      </Layout>
      <FlatList
        data={DATA}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <VStack mh={16}>
              <VStack itemsCenter>
                <Image
                  source={item.image.src}
                  style={{width: width_img, height: height_img}}
                />
                <Layout style={styles.imageTag} level="11">
                  <Text category="c1" status="white">
                    {item.image.tag}
                  </Text>
                </Layout>
              </VStack>
              <HStack mt={16} mb={8}>
                <Layout style={styles.tag} level="2">
                  <Text category="c1" status="placeholder">
                    {item.tag}
                  </Text>
                </Layout>
                <Text category="subhead" status="placeholder">
                  {item.time_left}
                </Text>
              </HStack>
              <Text category="body" marginBottom={16}>
                {item.title}
              </Text>
              <ProgressBar
                progress={item.donated / item.target}
                progressColor={theme['background-basic-color-7']}
              />
              <HStack mt={12}>
                <HStack justify="flex-start">
                  <Icon pack="assets" name="money" />
                  <Text category="callout" status="snow" marginLeft={8}>
                    $24,680 of $35,790
                  </Text>
                </HStack>
                <Text category="h7" status="primary">
                  {((item.donated / item.target) * 100).toFixed(1)}%
                </Text>
              </HStack>
              <IDivider marginVertical={16} />
              <HStack justify="flex-start" mt={12} mb={20}>
                {Emoji.map((item, i) => {
                  return (
                    <TouchableOpacity key={i}>
                      <Text category="h7">{item} </Text>
                    </TouchableOpacity>
                  );
                })}
                <Text category="h7" status="snow">
                  You and 138 others
                </Text>
              </HStack>
              <Button children={'Donate Now +'} onPress={goBack} />
              <IDivider marginVertical={24} />
            </VStack>
          );
        }}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
});

export default Social04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  top: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  imageTag: {
    position: 'absolute',
    zIndex: 100,
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    right: 8,
    top: 8,
  },
  tag: {
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
const DATA = [
  {
    id: '1',
    title:
      'Non-fungible tokens (NFTs) seem to have exploded out of the ether this year.',
    image: {src: Images.social.photo05, tag: 'Feature'},
    tag: 'Crypto',
    time_left: '24 days left',
    donated: 24650,
    target: 35790,
  },
  {
    id: '1',
    title:
      'Non-fungible tokens (NFTs) seem to have exploded out of the ether this year.',
    image: {src: Images.social.photo06, tag: 'Feature'},
    tag: 'Crypto',
    time_left: '24 days left',
    donated: 14650,
    target: 35790,
  },
];
const Emoji = ['😛', '😍', '😂', '😀'];
