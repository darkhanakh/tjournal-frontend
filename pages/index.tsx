import { Post } from '../components';
import { MainLayout } from '../layouts/MainLayout';
import { Api } from '../utils/api';
import { NextPage } from 'next';
import { PostItem } from '../utils/api/types';

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  console.log(posts);

  return (
    <MainLayout>
      {posts.map((obj) => (
        <Post
          title={obj.title}
          description={obj.description}
          id={obj.id}
          key={obj.id}
        />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAll();

    return {
      props: {
        posts,
      },
    };
  } catch (e) {
    console.log(e);
  }
  return { props: null };
};

export default Home;
