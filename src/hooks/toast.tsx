/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from "react";
import { uuid } from "uuidv4";

import ToastContainer from "../components/ToastContainer";

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

interface ToastContexData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContex = createContext<ToastContexData>({} as ToastContexData);

const ToastProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, "id">) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessage((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessage((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContex.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={message} />
    </ToastContex.Provider>
  );
};

function useToast(): ToastContexData {
  const context = useContext(ToastContex);

  if (!context) {
    throw new Error("use Toast must be used within a ToastProvider");
  }

  return context;
}

export { ToastProvider, useToast };
