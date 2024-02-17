/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface CustomSnackbarProps {
  open: boolean;
  autoHideDuration: number;
  onClose: () => any;
  toast: { type: any; message: string };
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ open, autoHideDuration, onClose, toast }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={(event) => onClose()} severity={toast.type} sx={{ width: '100%' }}>
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
