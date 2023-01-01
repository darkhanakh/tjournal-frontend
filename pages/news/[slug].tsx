import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/';
import React from 'react';
import PostComments from '../../components/PostComments';

export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
