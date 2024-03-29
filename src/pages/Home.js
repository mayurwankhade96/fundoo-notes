import { useState } from "react";

import { Box, Toolbar } from "@mui/material";

import CreateNote from "../components/CreateNote";
import Nav from "../components/Nav";
import Notes from "../components/Notes";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Nav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Sidebar isDrawerOpen={isDrawerOpen} />
      <Box
        component='main'
        sx={{ flexGrow: 1, marginLeft: isDrawerOpen ? 35 : 10, p: 3 }}
      >
        <Toolbar />
        <CreateNote />
        <Notes />
      </Box>
    </Box>
  );
};

export default Home;
