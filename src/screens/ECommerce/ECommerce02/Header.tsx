import * as React from 'react';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {Text, NavigationAction, HStack, VStack} from 'components';

const Header = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <VStack style={[styles.container, {paddingTop: top + 4}]} level="5">
      <HStack>
        <NavigationAction status="transparent" />
        <NavigationAction status="transparent" icon="search" />
      </HStack>
      <Text category="h3" marginLeft={16} marginTop={8} status="white">
        Tramkam NFT
      </Text>
    </VStack>
  );
});

export default Header;

const themedStyles = StyleService.create({
  container: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 8,
  },
});
