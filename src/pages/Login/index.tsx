// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import AddTodo from '../../components/AddTodo';
import Todos from '../../components/Todos';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
};

export default Login;
