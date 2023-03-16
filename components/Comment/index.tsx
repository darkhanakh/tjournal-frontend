import React from 'react';
import {
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';
import { ResponseUser } from '../../utils/api/types';
import { Api } from '../../utils/api';

interface CommentProps {
  id: number;
  text: string;
  createdAt: string;
  user: ResponseUser;
  currentUserId: number;
  onRemove: (id: number) => void;
}

const Comment: React.FC<CommentProps> = ({
  user,
  createdAt,
  text,
  currentUserId,
  id,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    if (window.confirm('Точно удалить комментарий?')) {
      try {
        await Api().comments.remove(id);
        onRemove(id);
      } catch (e) {
        console.warn('remove comment', e);
      } finally {
        handleClose();
      }
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar>{user.fullName[0]}</Avatar>
        <b className="ml-10">{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      {user.id === currentUserId && (
        <>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
          >
            <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};

export default Comment;
