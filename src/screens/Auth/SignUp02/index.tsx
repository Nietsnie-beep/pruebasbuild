import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Button,
  Divider,
  Input,
} from '@ui-kitten/components';

import {Container, Content, Text, VStack, HStack, NavigationAction} from 'components';
import Images from 'assets/images';
import TabBar from 'components/TabBar';

const SignUp02 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setAtivedTab] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryRight={
          <Image
            source={Images.logo}
            // @ts-ignore
            style={styles.logo}
          />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <VStack mh={28}>
          <Text category="h3" marginBottom={4}>
            Create an account
          </Text>
          <Text category="subhead" marginBottom={32}>
            Already have an account?{' '}
            <Text category="subhead" status="primary">
              Login
            </Text>
          </Text>
          <TabBar
            style={styles.tabBar}
            onChangeTab={setAtivedTab}
            tabActive={activeTab}
            tabs={['Freelancer', 'Hirer']}
          />
          <Button
            children={'SIGN IN WITH FACEBOOK'}
            status="secondary"
            accessoryLeft={<Icon pack="assets" name="fb" />}
            style={styles.buttonSubmit}
            onPress={goBack}
          />
          <Button
            children={'SIGN IN WITH GOOGLE'}
            status="danger"
            accessoryLeft={<Icon pack="assets" name="gg" />}
            style={styles.buttonSubmit}
            onPress={goBack}
          />
        </VStack>

        <HStack itemsCenter mt={24} mb={48}>
          <Divider style={styles.divider} />
          <Text category="body" opacity={0.5}>
            Or Signup with Email
          </Text>
          <Divider style={styles.divider} />
        </HStack>
        <Input placeholder="Email" style={styles.input} accessoryLeft={<Icon pack='assets' name='user'/>}/>
        <Input placeholder="Password" style={styles.input}accessoryLeft={<Icon pack='assets' name='lock'/>} />
        <Button children={'Sign In'} style={styles.buttonSignIn} />
      </Content>
    </Container>
  );
});

export default SignUp02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
  },
  topNavigation: {
    marginHorizontal: 16,
  },
  content: {
    flexGrow: 1,
  },
  tabBar: {
    marginHorizontal: 52,
    marginBottom: 40,
  },
  buttonSubmit: {
    borderRadius: 99,
    marginBottom: 24,
    marginHorizontal: 8,
  },
  divider: {
    height: 1,
    width: '20%',
  },
  input: {
    marginBottom: 16,
    marginHorizontal: 32,
  },
  buttonSignIn: {
    marginHorizontal: 32,
    marginTop: 16,
  },
});
