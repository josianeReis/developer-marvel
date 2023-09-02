import React from 'react';
import { login } from '../../features/auth/auth';
import { useAppDispatch } from '../../helpers';
// import AddTodo from '../../components/AddTodo';
// import Todos from '../../components/Todos';

const Login: React.FC = () => {
  const [publicKey, setPublicKey] = React.useState('');
  const [privateKey, setPrivateKey] = React.useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('publicKey', publicKey);
    console.log('privateKey', privateKey);

    e.preventDefault();
    dispatch(login({ publicKey, privateKey }));
    console.log('teste');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Public key"
        onChange={(e) => setPublicKey(e.target.value)}
        value={publicKey}
      />
      <input
        type="text"
        placeholder="Private key"
        onChange={(e) => setPrivateKey(e.target.value)}
        value={privateKey}
      />
      <button type="submit">Entrar</button>
    </form>
  );
  // return (
  //   <>
  //     <AddTodo />
  //     <Todos />
  //   </>
  // );
};

export default Login;
