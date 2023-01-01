import React, { useState } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../';
import AddCommentForm from '../AddCommentForm';
import data from './../../data';

const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

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
        <AddCommentForm />
        <div className="mb-20" />
        {comments.map((obj) => (
          <Comment
            key={obj.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
          />
        ))}
      </div>
    </Paper>
  );
};

export default PostComments;
