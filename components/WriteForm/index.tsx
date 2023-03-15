import React, { useEffect, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WriteForm.module.sass';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';
import { useRouter } from 'next/router';

interface WriteFormProps {
  data?: PostItem;
}

const Editor = dynamic(() => import('./../Editor').then((m) => m.default), {
  ssr: false,
});

const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [title, setTitle] = useState(data?.title || '');
  const [blocks, setBlocks] = useState(data?.body || []);
  const [isLoading, setIsLoading] = useState(false);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const postData = { title, body: blocks };
      if (!data) {
        const post = await Api().post.create(postData);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, postData);
      }
    } catch (e) {
      console.warn('create post a', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading || !blocks.length || !title}
        onClick={onAddPost}
        variant="contained"
        color="primary"
      >
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>
  );
};

export default WriteForm;
