import { Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import React, { FC } from 'react';

export const Error: FC = () => {
  return (
    <>
      <ErrorIcon sx={{ color: 'darkgrey', fontSize: 48 }} />
      <Typography variant='h4' color='darkgrey'>
        Oops Something went wrong.
      </Typography>
    </>
  );
};
