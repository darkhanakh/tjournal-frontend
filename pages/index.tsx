import { Post } from '../components';
import { MainLayout } from '../layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { wrapper } from '../redux/store';
import { UserApi } from '../utils/api';
import { setUserData } from '../redux/reducers/user.slice';

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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { rtoken } = parseCookies(ctx);

      const user = await UserApi.getMe(rtoken);

      store.dispatch(setUserData(user));

      console.log(user);

      return { props: {} };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  });
