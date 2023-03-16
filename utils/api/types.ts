import { OutputData } from '@editorjs/editorjs';

export interface LoginDto {
  email: string;
  password: string;
}

export interface CreateUserDto extends LoginDto {
  fullName: string;
}

export type ResponseUser = {
  createdAt: string;
  id: number;
  token: string;
  updatedAt: string;
  commentsCount?: number;
} & CreateUserDto;

export interface CreatePostDto {
  title: string;
  body: OutputData['blocks'];
}

export interface PostItem {
  title: string;
  body: OutputData['blocks'];
  description: string;
  tags: string | null;
  id: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  user: ResponseUser;
}

export interface CreateCommentDto {
  postId: number;
  text: string;
}

export interface CommentItem {
  createdTime: any;
  updatedTime: string;
  id: number;
  text: string;
  post: PostItem;
  user: ResponseUser;
}

export interface SearchPostDto {
  title?: string;
  body?: string;
  views?: 'DESC' | 'ASC';
  limit?: number;
  take?: number;
  tag?: string;
}
