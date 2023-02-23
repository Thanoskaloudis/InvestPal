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
import { 
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined, 
  ChevronLeft, 
  ChevronRightOutlined, 
  HomeOutlined, 
  PieChartOutlined, 
  PointOfSaleOutlined, 
  SettingsOutlined, 
  TrendingUpOutlined 
} from '@mui/icons-material';
import PaidIcon from '@mui/icons-material/Paid';
import { useLocation, useNavigate } from 'react-router-dom';
import profileImage from "../assets/profile.png";
import { StyledBox } from './StyledBox';

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "General",
    icon: null,
  },
  {
    text: "Transactions",
    icon: <PaidIcon />,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Reports",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];


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
        {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? (theme as any).palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? (theme as any).palette.primary[600]
                            : (theme as any).palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? (theme as any).palette.primary[600]
                              : (theme as any).palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
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
              User Name
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
