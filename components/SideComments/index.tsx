import React, { useState } from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import data from './../../data';

import { CommentItem } from '../CommentItem';

import styles from './SideComments.module.scss';
import clsx from 'clsx';
import { useComments } from '../../hooks/useComments';

const SideComments = () => {
  const { comments } = useComments();
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => setVisible(!visible);

  return (
    <div className={styles.root}>
      <h3 className={clsx(!visible && styles.rotated)} onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};

export default SideComments;
