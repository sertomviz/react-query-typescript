import { Box, Autocomplete, TextField } from '@mui/material';
import React, { FC } from 'react';
import { ArticleCategory } from '../models';
import { DateRangePicker } from './ui';

interface NavBarProps {
  categories: ArticleCategory[];
  onChange: (event: React.SyntheticEvent, value: ArticleCategory | null) => void;
}

export const NavBar: FC<NavBarProps> = ({ categories, onChange }: NavBarProps) => {
  return (
    <Box mt={2} mb={2} sx={{ display: 'flex' }}>
      <Autocomplete
        disablePortal
        id='article-category-select'
        options={categories}
        getOptionLabel={(option: ArticleCategory) => option.webTitle}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label='Select Category' />}
        onChange={onChange}
        size='small'
      />
      <Box sx={{ marginLeft: 'auto' }}>
        <DateRangePicker />
      </Box>
    </Box>
  );
};
