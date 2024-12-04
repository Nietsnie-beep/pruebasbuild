import * as React from 'react';
import {View, Image, ImageBackground, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {Layout, StyleService, useStyleSheet} from '@ui-kitten/components';

import {Container, NavigationAction} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Social10 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const renderVideo = React.useCallback(({item}) => {
    return (
      <View style={{marginBottom: 12}}>
        <Image
          source={item.image}
          style={{width: 64, height: 80, borderRadius: 8}}
        />
      </View>
    );
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <ImageBackground
        source={Images.social.photo04}
        resizeMode="cover"
        style={{
          width: width,
          height: height,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <NavigationAction
          icon="arrow_left"
          marginTop={top}
          marginLeft={12}
          backgroundColor="transparent"
        />
        <View style={{marginTop: top, marginRight: 16}}>
          <FlatList
            data={DATA}
            renderItem={renderVideo}
            scrollEnabled={false}
            keyExtractor={keyExtractor}
          />
        </View>
      </ImageBackground>
      <Layout level="9" style={[styles.btn, {marginBottom: bottom + 12}]}>
        <NavigationAction
          icon="music_note"
          size="giant"
          status="light-salmon"
        />
        <NavigationAction icon="call" size="giant" style={{borderRadius: 12}} />
        <NavigationAction icon="menu" size="giant" status="light-salmon" />
      </Layout>
    </Container>
  );
});

export default Social10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  button: {
    marginLeft: 12,
    width: 48,
    height: 48,
  },
  btn: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    borderRadius: 8,
    marginHorizontal: 24,
  },
});
const DATA = [
  {
    id: 0,
    image: Images.social.photo05,
  },
  {
    id: 1,
    image: Images.social.photo02,
  },
  {
    id: 2,
    image: Images.social.photo03,
  },
];
