import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Icon, Screen, Text} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToLogin() {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {route.params.description}
      </Text>
      <Button
        title="Voltar ao início"
        marginTop="s40"
        onPress={goBackToLogin}
      />
    </Screen>
  );
}
