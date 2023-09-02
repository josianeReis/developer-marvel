import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const input: string = 'teste todo';
    dispatch(addTodo(input));
  };

  return (
    <>
      <input type="text" placeholder="enter a todo" value={''} />
      <button onClick={handleSubmit}> Submit </button>
    </>
  );
};

export default AddTodo;
