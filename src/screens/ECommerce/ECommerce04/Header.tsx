import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Button,
  Icon,
  Layout,
} from '@ui-kitten/components';
import Text from 'components/Text';

const Header = () => {
  const styles = useStyleSheet(themedStyles);
  const [itemFound, setItemFound] = React.useState(119);
  return (
    <View>
      <View style={styles.tabBar}>
        <Text
          marginLeft={16}
          children={`${itemFound} items`}
          category="subhead"
          status="placeholder"
        />
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.button}>
            <Icon pack="assets" name="list" style={styles.iconList} />
          </TouchableOpacity>
          <Layout style={styles.line} />
          <TouchableOpacity style={styles.button}>
            <Icon pack="assets" name="grid" style={styles.iconGrid} />
          </TouchableOpacity>
          <Button children="Filter" style={styles.filter} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'background-basic-color-3',
    borderTopWidth: 0.5,
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
  },
  topNav: {
    paddingHorizontal: 4,
  },
  filter: {
    paddingLeft: 30,
    paddingRight: 25,
    borderRadius: 0,
  },
  line: {
    height: 24,
    width: 0.7,
    backgroundColor: 'text-placeholder-color',
    alignSelf: 'center',
  },
  iconList: {
    tintColor: 'text-placeholder-color',
    width: 16,
    height: 16,
  },
  iconGrid: {
    tintColor: 'text-basic-color',
    width: 16,
    height: 16,
  },
  button: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
