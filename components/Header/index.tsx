import React, { useState } from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import Image from 'next/image';

import styles from './Header.module.scss';
import AuthDialog from '../AuthDialog';

const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = useState(false);

  const handleAuthOpen = () => {
    setAuthVisible(true);
  };

  const handleAuthClose = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <Image
            width={45}
            height={40}
            className="mr-20"
            src="/static/img/logo.svg"
            alt="Logo"
          />
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton onClick={handleAuthOpen}>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {/*<Link href="/profile/1">
          <div className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </div>
        </Link>*/}
        <div className={styles.loginButton} onClick={handleAuthOpen}>
          <UserIcon />
          Войти
        </div>
      </div>
      <AuthDialog onClose={handleAuthClose} visible={authVisible} />
    </Paper>
  );
};

export default Header;
