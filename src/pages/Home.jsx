import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import CreateNote from "../components/CreateNote";
import Nav from "../components/Nav";
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
      </Box>
    </Box>
  );
};

export default Home;
