/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocased, setIsFocased] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocased(true);
  }, []);

  const handleInputblur = useCallback(() => {
    setIsFocased(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocased={isFocased} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputblur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        type="text"
      />
    </Container>
  );
};

export default Input;
