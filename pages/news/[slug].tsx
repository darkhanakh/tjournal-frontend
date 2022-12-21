import { MainLayout } from '../../layouts/MainLayout';
import { Comment, FullPost } from '../../components/';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';

export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20" />
        <Comment user={{ fullname: 'A' }} text="" />
        <Comment user={{ fullname: 'B' }} text="" />
        <Comment user={{ fullname: 'C' }} text="" />
      </Paper>
    </MainLayout>
  );
}