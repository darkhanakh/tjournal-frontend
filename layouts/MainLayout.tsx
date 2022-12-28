import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { LeftMenu, SideComments } from '../components';

interface MainLayoutProps {
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
}) => {
  return (
    <div className={clsx('wrapper', className)}>
      {!hideMenu && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}
      <div className={clsx('content', { 'content--full': contentFullWidth })}>
        {children}
      </div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
