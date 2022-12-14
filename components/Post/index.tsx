import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';

const Post = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure iusto
        autem enim saepe assumenda cupiditate eligendi similique.
      </Typography>
      <Typography className="mt-10 mb-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        sint rem at accusamus iure porro soluta animi deserunt atque.
      </Typography>
      <Image
        src="/static/img/image1.png"
        width={600}
        height={400}
        alt="image"
      />
    </Paper>
  );
};

export default Post;
