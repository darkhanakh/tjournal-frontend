import { Post } from '../components';
import { MainLayout } from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}
