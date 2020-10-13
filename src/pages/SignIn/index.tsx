import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Login, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Login>
        <img src={logoImg} alt="Testing Context" />

        <form>
          <h1>Faça seu login</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="test">Esqueci minha senha</a>
        </form>
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
