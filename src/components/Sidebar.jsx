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

const Sidebar = () => {
  return (
    <Box>
      <Drawer variant='permanent'>
        <Toolbar />
        <Box>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <LightbulbOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Notes' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Reminders' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <EditOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Edit labels' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ArchiveOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Archive' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Bin' />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
