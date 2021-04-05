/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest} type="button">
    {children}
  </Container>
);

export default Button;
