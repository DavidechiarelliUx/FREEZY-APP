import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";


const MainLayout = () => {
  return (
    <>
      <TopBar />
        <Sidebar />
          <Outlet />
    </>
  );
};

export default MainLayout;
