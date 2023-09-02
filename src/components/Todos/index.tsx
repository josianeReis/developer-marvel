// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Todos: React.FC = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
};

export default Todos;
