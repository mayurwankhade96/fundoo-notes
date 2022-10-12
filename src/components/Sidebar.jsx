import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const menuItems = [
  { name: "Notes", icon: <LightbulbOutlinedIcon /> },
  { name: "Reminders", icon: <NotificationsOutlinedIcon /> },
  { name: "Edit labels", icon: <EditOutlinedIcon /> },
  { name: "Archive", icon: <ArchiveOutlinedIcon /> },
  { name: "Bin", icon: <DeleteOutlineOutlinedIcon /> },
];

const Sidebar = (props) => {
  const { isDrawerOpen } = props;

  return (
    <>
      <Drawer variant='permanent' open={isDrawerOpen}>
        <Toolbar />
        <Box sx={{ width: isDrawerOpen ? 280 : 80, whiteSpace: "nowrap" }}>
          <List>
            {menuItems.map((menu, index) => (
              <ListItemButton key={index}>
                <ListItemIcon sx={{ px: 1.5 }}>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={menu.name}
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
