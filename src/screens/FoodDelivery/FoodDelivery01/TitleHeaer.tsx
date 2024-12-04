import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
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

import {Container, Content, Text, NavigationAction, HStack} from 'components';

interface ITitleHeaderProps {
  title: string;
  onViewAll?(): void;
}

const TitleHeader = React.memo(({title, onViewAll}: ITitleHeaderProps) => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <HStack itemsCenter mt={24} mb={16} mh={24}>
      <Text category="h4">{title}</Text>
      <Button children={'View All'} onPress={onViewAll} size="small" />
    </HStack>
  );
});

export default TitleHeader;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
