import * as React from 'react';
import {Image, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Text, HStack} from 'components';
import Images from 'assets/images';
import useToggle from 'hooks/useToggle';

const SignIn02 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [show, setShow] = useToggle(false);
  return (
    <Layout style={styles.container} level="9">
      <ImageBackground
        style={{
          width: width,
          height: height,
          paddingHorizontal: 32,
          paddingTop: 40,
        }}
        source={Images.auth.background_01}>
        <Image
          source={Images.logo}
          //@ts-ignore
          style={styles.logo}
        />
        <Text category="callout" center marginBottom={8}>
          Welcome back!
        </Text>
        <Text category="h3" center marginBottom={4}>
          Douglas Walker
        </Text>
        <Text category="body" opacity={0.5} center>
          (789) 508-5450
        </Text>
        <Input
          style={styles.input}
          placeholder="Your Password"
          secureTextEntry={!show}
          accessoryRight={
            <TouchableOpacity onPress={setShow}>
              <Icon
                pack="assets"
                name={show ? 'eye' : 'eye_close'}
                style={styles.icon}
              />
            </TouchableOpacity>
          }
        />
        <Button
          children={'Sign In'}
          style={styles.button}
          onPress={goBack}
          accessoryRight={<Icon pack="assets" name="caret_right" />}
        />
        <HStack itemsCenter alignSelfCenter mb={32} mt={24}>
          <Icon pack="assets" name="smiley" />
          <Text category="callout" status="primary" marginLeft={4}>
            Login with FaceID
          </Text>
        </HStack>
        <Button
          children={'SIGN IN WITH FACEBOOK'}
          status="secondary"
          accessoryLeft={<Icon pack="assets" name="fb" />}
          style={{marginBottom: 24}}
        />
        <Button
          children={'SIGN IN WITH GOOGLE'}
          status="danger"
          accessoryLeft={<Icon pack="assets" name="gg" />}
        />
      </ImageBackground>
      <HStack style={styles.bottom}>
        <Text category="callout">Forgot Password?</Text>
        <Text category="callout" status="primary">
          SIGN UP!
        </Text>
      </HStack>
    </Layout>
  );
});

export default SignIn02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
    alignSelf: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-placeholder-color',
  },
  input: {
    marginTop: 32,
    marginBottom: 24,
  },
  button: {},
  buttonSubmit: {
    width: '100%',
    justifyContent: 'space-between',
  },
  bottom: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 32,
    left: 32,
    right: 32,
  },
});
