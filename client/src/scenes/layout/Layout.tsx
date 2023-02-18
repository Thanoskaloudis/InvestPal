import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar";

export const Layout = () => {
  return <Box width="100%" height="100%">
    <Box>
      <Navbar />
      <Outlet />
    </Box>

  </Box>
}