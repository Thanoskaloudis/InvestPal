import React, { useEffect, useState } from 'react';
import { ISidebar } from '../utils/models';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import profileImage from "../assets/profile.png";
import { StyledBox } from './StyledBox';
import { ChevronLeft, SettingsOutlined } from '@mui/icons-material';

export const Sidebar = (props: ISidebar) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return <Box component="nav">
  {props.isSidebarOpen && (
    <Drawer
      open={props.isSidebarOpen}
      onClose={() => props.setIsSidebarOpen(false)}
      variant="persistent"
      anchor="left"
      sx={{
        width: props.drawerWidth,
        "& .MuiDrawer-paper": {
          color: (theme as any).palette.secondary[200],
          backgroundColor: (theme as any).palette.background.alt,
          boxSixing: "border-box",
          borderWidth: props.isNonMobile ? 0 : "2px",
          width: props.drawerWidth,
        },
      }}
    >
      <Box width="100%">
        <Box m="1.5rem 2rem 2rem 3rem">
          <StyledBox color={theme.palette.secondary.main}>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="h4" fontWeight="bold">
                InvestPal
              </Typography>
            </Box>
            {!props.isNonMobile && (
              <IconButton onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}>
                <ChevronLeft />
              </IconButton>
            )}
          </StyledBox>
        </Box>
        <List>
        </List>
      </Box>

      <Box position="absolute" bottom="2rem">
        <Divider />
        <StyledBox textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
          <Box
            component="img"
            alt="profile"
            src={profileImage}
            height="40px"
            width="40px"
            borderRadius="50%"
            sx={{ objectFit: "cover" }}
          />
          <Box textAlign="left">
            <Typography
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{ color: (theme as any).palette.secondary[100] }}
            >
              Thanos
            </Typography>
          </Box>
          <SettingsOutlined
            sx={{
              color: (theme as any).palette.secondary[300],
              fontSize: "25px ",
            }}
          />
        </StyledBox>
      </Box>
    </Drawer>
  )}
</Box>
}
