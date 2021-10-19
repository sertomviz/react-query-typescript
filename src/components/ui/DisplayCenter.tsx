import { Grid } from '@mui/material';
import React, { FC } from 'react';

export const DisplayCenter: FC = ({ children }) => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='80vh'>
      <Grid xs item sx={{ textAlign: 'center' }}>
        {children}
      </Grid>
    </Grid>
  );
};
