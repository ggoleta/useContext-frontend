import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  ${props =>
    props.isError &&
    css`
      border: 2px solid #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
