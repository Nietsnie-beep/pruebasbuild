import * as React from 'react';
import {View, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Input,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Container, Text, VStack} from 'components';
import Images from 'assets/images';

const Social02 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const renderImage = React.useCallback(
    ({item}) => (
      <View>
        <Image
          source={item}
          style={{
            width: (width - 48) / 3,
            height: (width - 48) / 3,
            marginRight: 8,
            marginBottom: 8,
            borderRadius: 4,
          }}
        />
      </View>
    ),
    [],
  );
  const renderHeader = React.useCallback(() => {
    return (
      <VStack mb={32}>
        <Text
          uppercase
          status="placeholder"
          category="subhead"
          children="Trending"
          marginTop={20}
        />
        <View style={styles.tagView}>
          <Layout style={styles.tag} level="2">
            <Text category="c1" status="placeholder" children="Game" />
          </Layout>
          <Layout style={styles.tag} level="2">
            <Text category="c1" status="placeholder" children="NFT" />
          </Layout>
          <Layout style={styles.tag} level="2">
            <Text category="c1" status="placeholder" children="Marketplace" />
          </Layout>
          <Layout style={styles.tag} level="2">
            <Text category="c1" status="placeholder" children="Crypto" />
          </Layout>
        </View>
        <Text
          children="REcent search"
          uppercase
          status="placeholder"
          category="subhead"
          marginBottom={16}
        />
        <View style={{marginLeft: -12}}>
          <Button
            style={styles.btn}
            onPress={goBack}
            status="fill"
            accessoryLeft={<Icon pack="assets" name="clock" />}
            children="What is NFT?"
          />
          <Button
            onPress={goBack}
            status="fill"
            style={styles.btn}
            accessoryLeft={<Icon pack="assets" name="clock" />}
            children="Best coin search 2021"
          />
          <Button
            onPress={goBack}
            status="fill"
            style={styles.btn}
            accessoryLeft={<Icon pack="assets" name="clock" />}
            children="become an author"
          />
        </View>
      </VStack>
    );
  }, []);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNav}
        accessoryRight={() => (
          <Input
            accessoryLeft={props => (
              <Icon
                {...props}
                pack="assets"
                name="search16"
                style={styles.icon}
              />
            )}
            placeholder="Search every things "
            style={styles.input}
            size="medium"
          />
        )}
      />
      <FlatList
        data={DATA_Image}
        ListHeaderComponent={renderHeader}
        renderItem={renderImage}
        numColumns={3}
        contentContainerStyle={{marginHorizontal: 16}}
        horizontal={false}
        keyExtractor={(i, _) => _.toString()}
      />
    </Container>
  );
});

export default Social02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  input: {
    borderRadius: 99,
    flex: 1,
  },
  topNav: {
    paddingHorizontal: 16,
  },
  btn: {
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  tag: {
    borderRadius: 16,
    padding: 8,
    marginRight: 8,
  },
  tagView: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 32,
  },
  icon: {
    marginLeft: 12,
  },
});
const DATA_Image = [
  Images.rectangle.rectangle_01,
  Images.rectangle.rectangle_02,
  Images.rectangle.rectangle_03,
  Images.rectangle.rectangle_04,
  Images.rectangle.rectangle_05,
  Images.rectangle.rectangle_06,
  Images.rectangle.rectangle_01,
  Images.rectangle.rectangle_02,
  Images.rectangle.rectangle_03,
  Images.rectangle.rectangle_04,
  Images.rectangle.rectangle_05,
  Images.rectangle.rectangle_06,
];
