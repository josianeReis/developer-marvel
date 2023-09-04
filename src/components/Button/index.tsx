import React from 'react';
import * as S from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  label: string;
  id: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, label, ...props }) => {
  return (
    <S.Button type={type} {...props}>
      {label}
    </S.Button>
  );
};

export default Button;
