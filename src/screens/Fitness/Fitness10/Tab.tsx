import * as React from 'react';
import {Image} from 'react-native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  Divider,
} from '@ui-kitten/components';

import {Text, HStack, VStack} from 'components';
import Images from 'assets/images';

interface ActivityProps {
  date: string;
  time: string;
  km: number;
}

interface TabProps {
  data: ActivityProps[];
}

const Tab = React.memo(({data}: TabProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <VStack mh={24}>
      {data &&
        data.map((activity, index) => {
          return (
            <VStack key={index} mb={24}>
              <HStack mb={24} itemsCenter>
                <HStack justify="flex-start">
                  <Layout style={styles.layoutVector} level="2">
                    <Image
                      source={Images.fitness.vector}
                      //@ts-ignore
                      style={styles.vector}
                    />
                  </Layout>
                  <VStack ml={16}>
                    <Text category="h4" marginBottom={8}>
                      {activity.km}
                      <Text
                        category="subhead"
                        status="platinum"
                        children={' Km'}
                      />
                    </Text>
                    <HStack>
                      <HStack justify="flex-start" itemsCenter mr={12}>
                        <Icon
                          pack="assets"
                          name="calendar"
                          style={styles.icon}
                        />
                        <Text status="placeholder" category="subhead">
                          {activity.date}
                        </Text>
                      </HStack>
                      <HStack justify="flex-start" itemsCenter>
                        <Icon pack="assets" name="timer" style={styles.icon} />
                        <Text status="placeholder" category="subhead">
                          {activity.time}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </HStack>
                <Icon pack="assets" name="caret_right" style={styles.caret} />
              </HStack>
              <Divider />
            </VStack>
          );
        })}
    </VStack>
  );
});

export default Tab;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  vector: {
    width: 50,
    height: 32,
    tintColor: 'text-success-color',
  },
  layoutVector: {
    width: 64,
    height: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: 'text-placeholder-color',
    marginRight: 4,
  },
  caret: {
    tintColor: 'background-basic-color-3',
    width: 24,
    height: 24,
  },
});
