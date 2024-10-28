import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Screen, Text} from '@components';

type SettingsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'SettingsScreen'
>;

export function SettingsScreen(props: SettingsScreenProps) {
  console.log(props);
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings Screen</Text>
    </Screen>
  );
}
