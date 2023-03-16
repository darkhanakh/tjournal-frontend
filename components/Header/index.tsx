import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Paper,
  Button,
  IconButton,
  Avatar,
  ListItem,
  List,
} from '@material-ui/core';
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
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/reducers/user.slice';
import { PostItem } from '../../utils/api/types';
import { Api } from '../../utils/api';

const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleAuthOpen = () => {
    setAuthVisible(true);
  };

  const handleAuthClose = () => {
    setAuthVisible(false);
  };

  useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const handleChangeInput = async (e) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (e) {
      console.log(e);
    }
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
          <input
            value={searchValue}
            onClick={() => setIsInputClicked(!isInputClicked)}
            onChange={handleChangeInput}
            placeholder="Поиск"
          />
          {posts.length > 0 && isInputClicked && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map((post) => (
                  <Link key={post.id} href={`/news/${post.id}`} legacyBehavior>
                    <a href="">
                      <ListItem button>{post.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
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
        {userData ? (
          <Link href="/profile/1">
            <div className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom />
            </div>
          </Link>
        ) : (
          <div className={styles.loginButton} onClick={handleAuthOpen}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <AuthDialog onClose={handleAuthClose} visible={authVisible} />
    </Paper>
  );
};

export default Header;
