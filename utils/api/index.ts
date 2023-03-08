import axios from 'axios';
import { CreateUserDto, LoginDto, ResponceUser } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const UserApi = {
  async register(dto: CreateUserDto): Promise<ResponceUser> {
    const { data } = await instance.post('/auth/register', dto);
    return data;
  },

  async login(dto: LoginDto): Promise<ResponceUser> {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },
};
