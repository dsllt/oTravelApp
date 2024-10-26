import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

export function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
  });

  function submitForm() {
    // reset({
    //   title: 'Sua conta foi criada com sucesso',
    //   description: 'Agora é só fazer login na nossa plataforma.',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username obrigatório'}}
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        rules={{required: 'Nome obrigatório'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{marginBottom: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        rules={{required: 'E-mail obrigatório'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's48'}}
      />

      <Button
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.errors}
      />
    </Screen>
  );
}
