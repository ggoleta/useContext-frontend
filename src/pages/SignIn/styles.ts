import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/background-signin.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Login = styled.div`
  max-width: 700px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 340px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 80px 0 24px 0;
      font-size: 24px;
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #f4ede8;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    margin-top: 80px;
    text-decoration: none;
    color: #ff9000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 18px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;
