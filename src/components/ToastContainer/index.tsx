/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import Toast from "./Toast";

import { ToastMessage, useToast } from "../../hooks/toast";
import { Container } from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
