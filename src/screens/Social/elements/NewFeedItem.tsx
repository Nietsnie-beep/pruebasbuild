import React from 'react';
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  ImageRequireSource,
} from 'react-native';
import {
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import Text from 'components/Text';
import dayjs from 'utils/dayjs';
import {HStack, IDivider} from 'components';
import PersonItem, {IPersonItemProps} from './PersonItem';
import FBCollage from 'react-native-fb-collage';
export interface NewFeedItemProps {
  id: string;
  user: IPersonItemProps;
  title: string;
  images: ImageRequireSource[] | string[];
  liked: boolean;
  like_number: number;
  commented: boolean;
  comment_number: number;
  bookmark: boolean;
  create_at: string;
}

const NewFeedItem = ({data}: {data: NewFeedItemProps}) => {
  const {height, width} = useWindowDimensions();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const [liked, setLiked] = React.useState(data.liked);
  const pressLike = React.useCallback(() => setLiked(!liked), [liked]);

  return (
    <View style={styles.container}>
      <HStack mb={16} mh={4} padding={4}>
        <PersonItem data={data.user} />
        <Text status="snow">{dayjs(data.create_at).format('hh:mm')}</Text>
      </HStack>
      <Text marginHorizontal={4} marginBottom={16}>
        {data.title}
      </Text>
      <FBCollage images={data.images} spacing={4} width={width - 24} />
      <IDivider marginTop={16} />
      <HStack mt={16}>
        <HStack>
          <HStack mr={32} onPress={pressLike}>
            <Icon
              pack="assets"
              name="heart"
              style={[
                styles.heart,
                liked && {tintColor: theme['color-danger-100']},
              ]}
            />
            <Text category="h7" marginLeft={8} status="snow">
              {data.like_number}
            </Text>
          </HStack>
          <HStack>
            <Icon pack="assets" name="chat" />
            <Text category="h7" marginLeft={8} status="snow">
              {data.comment_number}
            </Text>
          </HStack>
        </HStack>
        <TouchableOpacity>
          <Icon pack="assets" name="bookmark" />
        </TouchableOpacity>
      </HStack>
    </View>
  );
};

export default NewFeedItem;

const themedStyles = StyleService.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  heart: {
    width: 20,
    height: 20,
  },
});
