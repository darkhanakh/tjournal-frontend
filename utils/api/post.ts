import { AxiosInstance } from 'axios';
import { CreatePostDto, PostItem, SearchPostDto } from './types';

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostItem[]>('/posts');

    return data;
  },

  async search(query: SearchPostDto) {
    const { data } = await instance.get<{ items: PostItem[]; total: number }>(
      '/posts/search',
      {
        params: query,
      }
    );

    return data;
  },

  async getOne(id: number) {
    const { data } = await instance.get<PostItem>(`/posts/${id}`);

    return data;
  },

  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostItem }>(
      '/posts',
      dto
    );

    return data;
  },

  async update(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: PostItem }>(
      `/posts/${id}`,
      dto
    );

    return data;
  },
});
