import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Controller, useForm} from 'react-hook-form';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormType = {
  email: string;
  password: string;
};

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginFormType) {
    console.log('Submit', email, password);
  }

  return (
    <Screen canGoBack={false} scrollable={false}>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{marginBottom: 's10'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        marginBottom="s40"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Entrar"
        marginBottom="s10"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        title="Criar uma conta"
        preset="outline"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
