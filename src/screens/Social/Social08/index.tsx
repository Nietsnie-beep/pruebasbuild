import * as React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
} from '@ui-kitten/components';
import {
  Bubble,
  BubbleProps,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  Message,
  MessageProps,
} from 'react-native-gifted-chat';
import {Container, Text, NavigationAction, HStack, VStack} from 'components';
import RenderComposer from './RenderComposer';
import Images from 'assets/images';
import dayjs from 'dayjs';

const Social08 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [messages, setMessages] = React.useState<IMessage[]>();

  React.useEffect(() => {
    setMessages([
      {
        _id: 0,
        createdAt: new Date(),
        text: 'Hi There Bro! 👋',
        user: {
          _id: 2,
          name: 'React Native',
        },
      },

      {
        _id: 2,
        text: 'Hi There Bro! 👋',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
        },
      },
      {
        _id: 3,
        text: 'Hi There Bro! ',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
        },
      },
    ]);
  }, []);
  const onSend = React.useCallback(
    (messages: IMessage[]) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );
    },
    [messages],
  );
  const renderInputToolbar = React.useCallback(
    (props: InputToolbarProps<IMessage>) => {
      return (
        <InputToolbar
          {...props}
          renderSend={() => null}
          containerStyle={styles.containerStyle}
          renderComposer={props => <RenderComposer {...props} />}
          primaryStyle={{
            marginBottom: -bottom ,
            backgroundColor: theme['background-basic-color-9'],
          }}
        />
      );
    },
    [],
  );
  const renderBubble = React.useCallback((props: BubbleProps<IMessage>) => {
    return (
      <View>
        <Bubble
          {...props}
          wrapperStyle={{
            left: styles.wrapperLeftStyle,
            right: styles.wrapperRightStyle,
          }}
          textStyle={{
            left: styles.textStyleLeft,
            right: styles.textStyleRight,
          }}
        />
        <Text
          marginTop={8}
          category="c1"
          status="platinum"
          right={props.position === 'right'}>
          {dayjs(props.currentMessage?.createdAt).format('MM/DD/YYYY  HH:MM')}
        </Text>
      </View>
    );
  }, []);
  const renderMessage = React.useCallback((props: MessageProps<IMessage>) => {
    return (
      <View style={{paddingBottom: 24}}>
        <Message
          {...props}
          renderAvatar={() => null}
          containerStyle={{
            left: {marginLeft: 16},
            right: {marginRight: 24},
          }}
        />
      </View>
    );
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <VStack
        level="7"
        style={{
          paddingTop: top + 8,
          ...styles.header,
        }}>
        <HStack itemsCenter>
          <NavigationAction
            icon="caret_left"
            status="transparent"
            size="giant"
          />
          <Avatar source={Images.avatar.avatar04} size="small" />
          <NavigationAction
            icon="phone_out"
            status="transparent"
            size="giant"
          />
        </HStack>
        <Text category="h3" status="white" marginLeft={16}>
          Erika Turner
        </Text>
      </VStack>
      <GiftedChat
        user={{_id: 1}}
        scrollToBottom
        messages={messages}
        onSend={message => onSend(message)}
        renderBubble={props => renderBubble(props)}
        renderAvatar={() => null}
        renderSend={props => null}
        renderMessage={props => renderMessage(props)}
        renderTime={props => null}
        imageStyle={{marginHorizontal: -12}}
        renderInputToolbar={props => renderInputToolbar(props)}
        infiniteScroll
      />
    </Container>
  );
});

export default Social08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#FBF0EA',
  },
  header: {
    paddingBottom: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  textStyleLeft: {
    color: 'text-basic-color',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'AlbertSans-Regular',
  },
  textStyleRight: {
    fontSize: 16,
    color: 'text-white-color',
    lineHeight: 24,
    fontFamily: 'AlbertSans-Regular',
  },
  timeTextStyle: {
    color: 'text-basic-color',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'AlbertSans-Bold',
  },
  wrapperLeftStyle: {
    backgroundColor: 'background-basic-color-3',
    borderTopLeftRadius: 0,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  wrapperRightStyle: {
    borderBottomRightRadius: 0,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'background-basic-color-5',
  },
});
const imageMess =
  'https://s3-alpha-sig.figma.com/img/adc7/17ea/4385c876b632daf90987923f3d4b0715?Expires=1632700800&Signature=dKxgdp2cslKCF85BD1iMC~YzPGCTG6oAscWDDJonzqil1Hze0acBM3Xg4ltSAj0BHqX50uDIx~EWQIC5JEIOHBbRAjhiMp3Wo0PPy0YkQc5de8l24Vh180u5pr5HNfFm9jdWkoX3u99xHNPX~ZCEwcN7~0JnqoeZmzhbD3KHGHQrpRwPyOx-Yhq57R3V98Rtv3A~1sWCzg9d~vyIPUuTUmOsAPzukQpxo1KsfCm3RIAlalDLMlhvEs2s4f1dX9Lw4En~f6a7cHmrXfBElvE3AghM2aLdrbQEqHDKJ6Z~ehPNn88jBzw~qQEwZMnzGfGt2fEbJyQcf8LP4CjUE2d2Jw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
