import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Box, Icon, Text} from '@components';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer/ScreenContainer';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';
import {useAppSafeArea, useAppTheme} from '@hooks';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box paddingHorizontal="s24" style={{paddingTop: top}}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              flexDirection="row"
              alignItems="center"
              gap="s8"
              marginBottom="s24">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
