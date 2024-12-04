import * as React from 'react';
import {Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import Images from 'assets/images';
import Rate from './Rate';

const ECommerce06 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [rate, setRate] = React.useState(4);
  const [valueInput, setValueInput] = React.useState('');

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        title="Write Review"
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.e_commerce.review}
          //@ts-ignore
          style={styles.review}
        />
        <Layout style={styles.layout}>
          <Image
            source={data.image}
            //@ts-ignore
            style={styles.image}
          />
          <VStack>
            <Text category="h4">{data.title}</Text>
            <Text category="h6" status="primary">
              {data.price}
            </Text>
          </VStack>
        </Layout>
        <Rate defaultRate={rate} setDefaultRate={setRate} />
        <TextInput
          placeholder="Your comment"
          value={valueInput}
          onChangeText={nextValue => setValueInput(nextValue)}
          style={styles.input}
          multiline={true}
        />
      </Content>
      <Button children={'Send Review'} style={styles.button} />
    </Container>
  );
});

export default ECommerce06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  layout: {
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginVertical: 24,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  review: {
    alignSelf: 'center',
  },
  input: {
    minHeight: 80,
    backgroundColor: 'background-basic-color-3',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 52,
    flex: 1,
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
});

const data = {
  price: '1.2 ETH',
  title: 'Cool Pets NFT',
  image: Images.social.person04,
};
