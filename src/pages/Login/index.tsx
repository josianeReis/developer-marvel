import React from 'react';
import { login } from '../../store/slices/auth';
import { useAppDispatch } from '../../store/hooks';

const Login: React.FC = () => {
  // TODO: Remove static values after finish the app
  const [publicKey, setPublicKey] = React.useState(
    '2ede135777c9d2c3f38eac3c50069a81'
  );
  const [privateKey, setPrivateKey] = React.useState(
    'f1ef23ababe13e9700845201c64095cca463d8e9'
  );

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('publicKey', publicKey);
    console.log('privateKey', privateKey);

    e.preventDefault();
    dispatch(login({ publicKey, privateKey }));
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
};

export default Login;
