import React from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import keep from "../assets/keep_2020q4_48dp.png";
import styles from "../styles/Nav.module.css";

const Nav = (props) => {
  // console.log(props);
  const { isDrawerOpen, setIsDrawerOpen } = props;
  return (
    // <nav className={styles.navbar}>

    //   <div className={styles.searchDiv}>
    //     <form>
    //       <TextField
    //         className={styles.searchBar}
    //         type='search'
    //         variant='outlined'
    //         placeholder='Search'
    //         fullWidth
    //         InputProps={{
    //           startAdornment: (
    //             <InputAdornment position='start'>
    //               <IconButton type='submit'>
    //                 <SearchIcon />
    //               </IconButton>
    //             </InputAdornment>
    //           ),
    //         }}
    //       ></TextField>
    //     </form>
    //   </div>

    //   <div className={styles.iconDiv}>
    //     <Tooltip title='Refresh'>
    //       <IconButton>
    //         <RefreshIcon />
    //       </IconButton>
    //     </Tooltip>
    //     <Tooltip title='Settings'>
    //       <IconButton>
    //         <SettingsOutlinedIcon />
    //       </IconButton>
    //     </Tooltip>
    //   </div>

    //   <div className={styles.rightDiv}>
    //     <Avatar>M</Avatar>
    //   </div>
    // </nav>
    <AppBar
      className={styles.header}
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className={styles.navbar}>
        <div className={styles.leftDiv}>
          <Tooltip title='Main menu'>
            <IconButton
              sx={{ mr: 0.5 }}
              size='large'
              edge='start'
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Link to='/home'>
            <img src={keep} alt='' />
            <span>Keep</span>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
