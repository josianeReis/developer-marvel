import React from 'react';
import { login } from '../../store/slices/auth';
import { useAppDispatch } from '../../store/hooks';
import * as S from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

// TODO: remove after finish
// 2ede135777c9d2c3f38eac3c50069a81
// f1ef23ababe13e9700845201c64095cca463d8e9

const Login: React.FC = () => {
  const [publicKey, setPublicKey] = React.useState('');
  const [privateKey, setPrivateKey] = React.useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ publicKey, privateKey }));
  };

  return (
    <S.Container>
      <S.Content onSubmit={(e) => handleSubmit(e)}>
        <h1>Marvel</h1>
        <Input
          name="text"
          type="text"
          placeholder="Public key"
          onChange={(e) => setPublicKey(e.target.value)}
          value={publicKey}
        />
        <Input
          name="text"
          type="text"
          placeholder="Private key"
          onChange={(e) => setPrivateKey(e.target.value)}
          value={privateKey}
        />
        <Button id="submit" type="submit" label="Entrar" />
      </S.Content>
    </S.Container>
  );
};

export default Login;
