import React, { ChangeEvent } from 'react';
import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  name: string;
  value: string | number;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  console.log('props props', { ...props });
  return (
    <S.Input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      {...props}
    />
  );
};

export default Input;
