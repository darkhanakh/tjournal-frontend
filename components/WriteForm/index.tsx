import React, { useEffect } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WriteForm.module.sass';

interface WriteFormProps {
  title?: string;
}

const Editor = dynamic(() => import('./../Editor').then((m) => m.default), {
  ssr: false,
});

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};

export default WriteForm;
