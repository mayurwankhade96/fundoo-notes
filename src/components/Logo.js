import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const Logo = ({ align }) => {
  return (
    <Typography variant='h6' align={align}>
      <span style={{ color: "#4285f4" }}>F</span>
      <span style={{ color: "#ea4335" }}>u</span>
      <span style={{ color: "#fbbc05" }}>n</span>
      <span style={{ color: "#4285f4" }}>d</span>
      <span style={{ color: "#34a853" }}>o</span>
      <span style={{ color: "#ea4335" }}>o</span>
    </Typography>
  );
};

Logo.propTypes = {
  align: PropTypes.string.isRequired,
};

export default Logo;
