import axios from 'axios';
import { CreateUserDto, LoginDto, ResponseUser } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const UserApi = {
  async register(dto: CreateUserDto): Promise<ResponseUser> {
    const { data } = await instance.post('/auth/register', dto);
    return data;
  },

  async login(dto: LoginDto): Promise<ResponseUser> {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },

  async getMe(token: string): Promise<ResponseUser> {
    const { data } = await instance.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
