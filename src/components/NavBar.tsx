import { Box, Autocomplete, TextField, Grid } from '@mui/material';
import React, { FC } from 'react';
import { ArticleCategory } from '../models';
import { DatePick } from './ui';

interface NavBarProps {
  categories: ArticleCategory[];
  dateFrom: Date | null;
  dateTo: Date | null;
  onCategoryChange: (event: React.SyntheticEvent, value: ArticleCategory | null) => void;
  onDateFromChange: (date: Date | null) => void;
  onDateToChange: (date: Date | null) => void;
}

export const NavBar: FC<NavBarProps> = ({
  categories,
  dateFrom,
  dateTo,
  onCategoryChange,
  onDateFromChange,
  onDateToChange,
}: NavBarProps) => {
  return (
    <Box mt={2} mb={2} sx={{ display: 'flex' }}>
      <Autocomplete
        disablePortal
        id='article-category-select'
        options={categories}
        getOptionLabel={(option: ArticleCategory) => option.webTitle}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label='Select Category' />}
        onChange={onCategoryChange}
        size='small'
      />
      <Box sx={{ marginLeft: 'auto' }}>
        <Grid container justifyContent='flex-end'>
          <Grid item xs={5}>
            <DatePick label='From' value={dateFrom} onChange={onDateFromChange} />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <DatePick label='To' value={dateTo} onChange={onDateToChange} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
