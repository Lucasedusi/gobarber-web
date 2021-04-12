/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useContext } from "react";

import ToastContainer from "../components/ToastContainer";

interface ToastContexData {
  addToast(): void;
  removeToast(): void;
}

const ToastContex = createContext<ToastContexData>({} as ToastContexData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log("add toast");
  }, []);

  const removeToast = useCallback(() => {
    console.log("remove toast");
  }, []);

  return (
    <ToastContex.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
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
