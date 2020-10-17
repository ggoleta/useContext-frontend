import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast({ type, title, description }: Omit<ToastMessages, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessages {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessages[]>([]);
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessages, 'id'>) => {
      const toast = {
        id: uuidv4(),
        type,
        title,
        description,
      };
      setMessages([...messages, toast]);
    },
    [messages],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(allMessages =>
      allMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a context.');
  }

  return context;
}

export { ToastProvider, useToast };
