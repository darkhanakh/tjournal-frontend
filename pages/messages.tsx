import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = () => {
  return (
    <MainLayout>
      <h1>Сообщения</h1>
    </MainLayout>
  );
};

export default Messages;
