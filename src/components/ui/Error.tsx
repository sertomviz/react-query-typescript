import { Grid, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import React, { FC } from 'react';

export const Error: FC = () => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='80vh'>
      <Grid xs item sx={{ textAlign: 'center' }}>
        <ErrorIcon sx={{ color: 'darkgrey', fontSize: 48 }} />
        <Typography variant='h4' color='darkgrey'>
          Oops Something went wrong.
        </Typography>
      </Grid>
    </Grid>
  );
};
