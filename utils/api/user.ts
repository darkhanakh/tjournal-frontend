import { CreateUserDto, LoginDto, ResponseUser } from './types';
import { AxiosInstance } from 'axios';

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: CreateUserDto): Promise<ResponseUser> {
    const { data } = await instance.post('/auth/register', dto);
    return data;
  },

  async login(dto: LoginDto): Promise<ResponseUser> {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },

  async getMe(): Promise<ResponseUser> {
    const { data } = await instance.get('/users/me');
    return data;
  },
});
