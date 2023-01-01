import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';

import styles from './AddCommentForm.module.sass';

interface AddCommentFormProps {}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState('');

  const onAddComment = () => {
    setIsClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        value={text}
        minRows={isClicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать коментарий..."
        fullWidth
        multiline
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsClicked(true)}
      />
      {isClicked && (
        <Button
          className={styles.addButton}
          variant="contained"
          color="primary"
          onClick={onAddComment}
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
