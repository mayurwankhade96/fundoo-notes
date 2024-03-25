import { Stack, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const ErrorMessage = ({ children }) => {
  return (
    <Stack component='span' direction='row' alignItems='center' spacing={1}>
      <InfoIcon fontSize='small' />
      <Typography variant='caption'>{children}</Typography>
    </Stack>
  );
};

export default ErrorMessage;
