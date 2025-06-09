import { Outlet} from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import SidebarAdmin from "./SidebarAdmin";


const MainLayout = () => {
const ruolo = localStorage.getItem("ruolo");
const isAdmin = ruolo === "ADMIN";
  return (
    <>
      <TopBar />
      {isAdmin ? <SidebarAdmin /> : <Sidebar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
