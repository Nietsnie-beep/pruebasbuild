import * as React from 'react';
import {ImageRequireSource} from 'react-native';
import {
  Avatar,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {Text, HStack, VStack} from 'components';
import {Status_Types_Enum} from 'constants/Type';

export interface IPersonItemProps {
  id: string;
  name: string;
  avatar: ImageRequireSource;
  sub_title: string;
  status: Status_Types_Enum;
}

const PersonItem = React.memo(({data}: {data: IPersonItemProps}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <HStack justify="flex-start">
      <VStack>
        <Avatar source={data.avatar} size="large" />
        <Layout
          style={styles.status}
          level={data.status === Status_Types_Enum.Online ? '6' : '4'}
        />
      </VStack>
      <VStack ml={16}>
        <Text category="h7" marginBottom={8}>
          {data.name}
        </Text>
        <Text category="subhead">{data.sub_title}</Text>
      </VStack>
    </HStack>
  );
});
export default PersonItem;

const themedStyles = StyleService.create({
  status: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: 'text-white-color',
    borderRadius: 99,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
