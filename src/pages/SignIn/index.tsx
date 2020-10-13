import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Login, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Login>
        <img src={logoImg} alt="Testing Context" />

        <form>
          <h1>Faça seu login</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
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
