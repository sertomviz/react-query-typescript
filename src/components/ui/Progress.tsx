import { Grid, LinearProgress } from '@mui/material';
import React, { FC } from 'react';

export const Progress: FC = () => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='80vh'>
      <Grid xs item>
        <LinearProgress color='primary' />
      </Grid>
    </Grid>
  );
};
