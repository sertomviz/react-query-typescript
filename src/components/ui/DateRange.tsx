import React, { FC, useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateRange } from '@mui/lab/DateRangePicker';

export const DateRangePicker: FC = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDateRangePicker
          startText='From'
          endText='To'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} size='small' />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} size='small' />
            </React.Fragment>
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
};
