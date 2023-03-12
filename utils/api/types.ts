export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  createdAt: string;
  id: number;
  token: string;
  updatedAt: string;
} & CreateUserDto;
