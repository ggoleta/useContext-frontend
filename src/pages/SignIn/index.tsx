import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import { Container, Login, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/toast';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória.'),
        });
        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Favor conferir suas credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Login>
        <img src={logoImg} alt="Testing Context" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="test">Esqueci minha senha</a>
        </Form>
        <a href="test">
          <FiLogIn />
          Criar conta
        </a>
      </Login>
      <Background />
    </Container>
  );
};

export default SignIn;
