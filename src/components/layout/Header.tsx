import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { APP_TITLE } from '../../utils/constants';

export const Header: React.FC = () => {
  return (
    <>
      <AppBar position='fixed' sx={{ alignItems: 'center' }}>
        <Toolbar disableGutters variant='dense'>
          <Typography variant='h6' noWrap>
            {APP_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
