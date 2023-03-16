import { CommentItem } from '../utils/api/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Api } from '../utils/api';

interface UseCommentsProps {
  setComments: Dispatch<SetStateAction<CommentItem[]>>;
  comments: CommentItem[];
}

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<CommentItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const comments = await Api().comments.getAll(postId);
        setComments(comments);
      } catch (e) {
        console.warn('fetch comments', e);
      }
    })();
  }, []);

  return { comments, setComments };
};
