import Image from 'next/image';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/CreateOutlined';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBottomIcon from '@material-ui/icons/ExpandMoreOutlined';

import styles from './Header.module.scss';
const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center ">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Image
          src="/static/img/logo.svg"
          alt="logo"
          width={35}
          height={45}
          className={styles.logo}
        />
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="avatar"
          src="/static/img/avatar.jpg"
        />
        <ArrowBottomIcon />
      </div>
    </Paper>
  );
};

export default Header;
