import { Typography } from '@mui/material';
import React, { FC } from 'react';

export const NoArticles: FC = () => {
  return (
    <Typography variant='h5' color='darkgrey'>
      No articles found for selected criteria.
    </Typography>
  );
};
