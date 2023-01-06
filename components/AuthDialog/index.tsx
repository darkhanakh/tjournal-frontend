import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './AuthDialog.module.scss';
import MainForm from './forms/MainForm';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>(
    'main'
  );

  return (
    <>
      <Dialog
        open={visible}
        onClose={onClose}
        aria-labelledby="draggable-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          <DialogContentText>
            <div className={styles.content}>
              <Typography className={styles.title}>
                {formType === 'main' ? (
                  'Вход в TJ'
                ) : (
                  <p
                    onClick={() => setFormType('main')}
                    className={styles.backTitle}
                  >
                    <ArrowBackIcon /> К авторизации
                  </p>
                )}
              </Typography>
              {formType === 'main' && (
                <MainForm onOpenLogin={() => setFormType('login')} />
              )}

              {formType === 'login' && (
                <LoginForm onOpenRegister={() => setFormType('register')} />
              )}

              {formType === 'register' && (
                <RegisterForm onOpenLogin={() => setFormType('login')} />
              )}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthDialog;

/* 20:53 */
