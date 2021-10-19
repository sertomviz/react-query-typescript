import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

export const DatePick: FC<DatePickerProps> = ({ label, value, onChange }: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker label={label} value={value} onChange={onChange} renderInput={params => <TextField {...params} size='small' />} />
    </LocalizationProvider>
  );
};
