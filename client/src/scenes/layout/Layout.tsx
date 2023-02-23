import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useGetUserQuery } from "../../features/api/apiSlice";
import { useAppSelector } from "../../app/hooks";

export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useAppSelector((state) => state.user.userId);
  const { data } = useGetUserQuery(userId);

  console.log("DATA: ", data);

  return <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    />
    <Box flexGrow={1}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </Box>

  </Box>
}
