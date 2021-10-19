import { Box, Pagination as Pag } from '@mui/material';
import React, { FC } from 'react';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ count, page, onChange }: PaginationProps) => {
  return (
    <Box mt={4} pb={2} display='flex' justifyContent='center' alignItems='center'>
      <Pag count={count} page={page} onChange={onChange} variant='outlined' color='primary' />
    </Box>
  );
};
