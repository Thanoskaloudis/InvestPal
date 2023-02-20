import { AppBar, Box, Button, IconButton, InputBase, Menu, Toolbar, useTheme, Typography, MenuItem, PaletteColor } from '@mui/material';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined
} from "@mui/icons-material";
import { useAppDispatch } from '../app/hooks';
import React, { useState } from 'react';
import profileImage from "../assets/profile.png";
import { StyledBox } from './StyledBox';
import { setTheme } from '../features/theme/themeSlice';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorElNav);
  const handleClose = () => setAnchorElNav(null);

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <StyledBox>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <StyledBox
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
          </StyledBox>
        </StyledBox >
        <StyledBox gap="1.5rem">
          <IconButton onClick={() => dispatch(setTheme())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <StyledBox>
          <Button
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box>
                <Typography fontWeight="bold" fontSize="0.85rem"
                    sx={{ color: (theme as any).palette.secondary[100] }}>
                  User Name
                </Typography>
              </Box>
              <Box
                component="img"
                src={profileImage}
                alt="profile"
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
            </Button>
            <Menu
              anchorEl={anchorElNav}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </StyledBox>
        </StyledBox>
      </Toolbar>
    </AppBar>
  );
};
