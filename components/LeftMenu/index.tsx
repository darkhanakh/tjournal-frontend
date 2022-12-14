import { Button } from '@material-ui/core';
import {
  WhatshotOutlined as FireIcon,
  TextsmsOutlined as MessageIcon,
  TrendingUp as RatingIcon,
  FormatListBulletedOutlined as SubcribeIcon,
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss';

const LeftMenu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <RatingIcon />
            Рейтинг RJ
          </Button>
        </li>
        <li>
          <Button>
            <SubcribeIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
