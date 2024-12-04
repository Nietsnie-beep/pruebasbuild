import React from 'react';
import {View} from 'react-native';
import {StyleService, useStyleSheet, Layout} from '@ui-kitten/components';
import {Composer, Send} from 'react-native-gifted-chat';
import {NavigationAction} from 'components';

const RenderComposer = (props: any) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.container} level="9">
      <Composer
        {...props}
        textInputStyle={{backgroundColor: 'transparent'}}
        placeholderTextColor={'#52606D'}
      />
      <View style={styles.content}>
        <Send {...props} containerStyle={styles.send} />
        <NavigationAction icon="image" status="primary" />
        <NavigationAction icon="smiley" status="primary" />
        <NavigationAction icon="menu" status="primary" />
      </View>
    </Layout>
  );
};

export default RenderComposer;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 16,
    marginBottom: 12,
    height: 80,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  send: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
