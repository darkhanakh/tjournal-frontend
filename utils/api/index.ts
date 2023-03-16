import Cookies, { parseCookies } from 'nookies';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { UserApi } from './user';
import axios from 'axios';
import { PostApi } from './post';
import { CommentApi } from './comment';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
  comments: ReturnType<typeof CommentApi>;
};

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.rtoken;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
    comments: CommentApi(instance),
  };
};
