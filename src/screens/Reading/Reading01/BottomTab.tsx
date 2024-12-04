import * as React from 'react';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet} from '@ui-kitten/components';

import {NavigationAction, HStack} from 'components';

const BottomTab = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <HStack level="2" style={[styles.container, {paddingBottom: bottom + 8}]}>
      {TAB.map((item, i) => {
        return <NavigationAction status="primary" icon={item} key={i} />;
      })}
    </HStack>
  );
});

export default BottomTab;

const themedStyles = StyleService.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 12,
  },
});
const TAB = ['house', 'book', 'books', 'tote', 'user'];
