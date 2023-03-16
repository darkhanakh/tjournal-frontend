import React, { useState } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../';
import AddCommentForm from '../AddCommentForm';
import { CommentItem } from '../../utils/api/types';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/reducers/user.slice';
import { useComments } from '../../hooks/useComments';

interface PostCommentsProps {
  postId: number;
}

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = useState(0);
  const { comments, setComments } = useComments(postId);

  const onAddComment = (obj: CommentItem) =>
    setComments((prev) => [...prev, obj]);

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          onChange={(_, newValue) => setActiveTab(newValue)}
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        {userData && (
          <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />
        )}
        <div className="mb-20" />
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            user={comment.user}
            text={comment.text}
            createdAt={comment.createdTime}
            currentUserId={userData.id}
            onRemove={onRemoveComment}
          />
        ))}
      </div>
    </Paper>
  );
};

export default PostComments;
