import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Layout,
  Icon,
} from '@ui-kitten/components';
import useLayout from 'hooks/useLayout';

import Text from 'components/Text';
import {
  VictoryBar,
  VictoryGroup,
  VictoryLabel,
  VictoryTooltip,
} from 'victory-native';

interface Props {
  x: number;
  y: number;
  y0: number;
}
interface DataProps {
  data: Props[];
  setStep: number;
  dataSetStep: Props[];
}

const ChartBar = memo(({data, setStep, dataSetStep}: DataProps) => {
  const {width} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.container} level="1">
      <View style={[styles.header, {width: width - 80}]}>
        <Text category="subhead" marginTop={18}>
          30 Nov - 6 Dec 2020
        </Text>
        <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
          <Icon pack="assets" name="arrow_right" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        <VictoryGroup colorScale={'qualitative'} height={255} padding={56}>
          <VictoryBar
            data={dataSetStep}
            cornerRadius={{bottom: 4, top: 4}}
            barWidth={24}
            width={width - 40}
            style={{
              labels: {
                fill: theme['text-placeholder-color'],
              },
              data: {fill: theme['background-basic-color-3']},
            }}
            labels={({datum}) => datum.date}
            labelComponent={<VictoryLabel dy={28} />}
          />
          <VictoryBar
            data={data}
            cornerRadius={{bottom: 4, top: 4}}
            barWidth={24}
            style={{
              labels: {
                fill: theme['text-placeholder-color'],
              },
              data: {
                fill: ({datum}) => {
                  if (datum.type === 'setStep') {
                    return theme['background-basic-color-3'];
                  } else if (datum.y0 >= setStep) {
                    return '#5784E8';
                  } else if (datum.y0 > setStep / 2) {
                    return '#FFDE70';
                  } else {
                    return '#C06363';
                  }
                },
              },
            }}
            labels={({datum}) => `${datum.y0}`}
            labelComponent={
              <VictoryTooltip
                activateData={true}
                renderInPortal={false}
                flyoutWidth={56}
                flyoutHeight={32}
                cornerRadius={4}
                pointerLength={6}
                flyoutStyle={{
                  strokeWidth: 0,
                  fill: '#FFFFFF',
                }}
                style={{
                  fill: '#1A051D',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 17,
                }}
                y={80}
                dx={1}
              />
            }
          />
        </VictoryGroup>
      </View>
    </Layout>
  );
});

export default ChartBar;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 16,
    alignItems: 'center',
    paddingTop: 2,
    borderWidth: 0.6,
    borderColor: 'background-basic-color-3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -34,
    zIndex: 10,
  },
  icon: {
    tintColor: 'text-white-color',
  },
  btn: {
    paddingTop: 17,
  },
});
