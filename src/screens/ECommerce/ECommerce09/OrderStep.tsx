import React from 'react';
import {View} from 'react-native';
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Layout,
} from '@ui-kitten/components';
import Text from 'components/Text';
import Checkbox from 'components/Checkbox';

interface Props {
  step: number;
  timeStep: Array<string>;
}

const OrderStep = ({step, timeStep}: Props) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const Step = React.useCallback(
    ({
      active,
      title,
      time,
      line,
    }: {
      start?: boolean;
      active?: boolean;
      title: string;
      time: string;
      line: boolean;
    }) => {
      return (
        <View style={styles.item}>
          <View>
            <Checkbox checked={active} style={{borderRadius: 99}} />
            <Layout style={{}} />
            {line ? <Layout level="5" style={styles.line} /> : null}
          </View>
          <View>
            <Text
              category={active ? 'callout' : 'body'}
              marginLeft={14}
              marginBottom={8}
              marginTop={-2}>
              {title}
            </Text>
            <Text marginLeft={14} category="subhead" status="platinum">
              {time}
            </Text>
          </View>
        </View>
      );
    },
    [],
  );
  return (
    <View style={styles.container}>
      <Step
        line={true}
        active={step >= 4}
        time={timeStep[0]}
        title="Shipper is going"
      />
      <Step
        line={true}
        active={step >= 3}
        time={timeStep[1]}
        title="Delivered to the shipper"
      />
      <Step
        line={true}
        active={step >= 2}
        time={timeStep[2]}
        title="Package have left the warehouse"
      />
      <Step
        line={false}
        active={step >= 1}
        time={timeStep[3]}
        title="Item is being packed"
      />
    </View>
  );
};

export default OrderStep;

const themedStyles = StyleService.create({
  container: {},
  line: {
    height: 60,
    width: 2,
    alignSelf: 'center',
    marginVertical: 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
