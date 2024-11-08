import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  console.log(props);
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings Screen</Text>
    </Screen>
  );
}
