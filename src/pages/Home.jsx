import { useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Nav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Sidebar isDrawerOpen={isDrawerOpen} />
    </div>
  );
};

export default Home;
