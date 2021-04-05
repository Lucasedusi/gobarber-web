/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} type="text" />
  </Container>
);

export default Input;
