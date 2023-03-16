import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';

import styles from './AddCommentForm.module.sass';
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';

interface AddCommentFormProps {
  postId: number;
  onSuccessAdd: (comment: CommentItem) => void;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({
  postId,
  onSuccessAdd,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onAddComment = async () => {
    setLoading(true);
    try {
      const comment = await Api().comments.create({ postId, text });
      onSuccessAdd(comment);
      setIsClicked(false);
      setText('');
    } catch (e) {
      console.warn('create comment component', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
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
          disabled={isLoading}
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
