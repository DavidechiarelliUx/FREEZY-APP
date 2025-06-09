import { Outlet} from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import SidebarAdmin from "./SidebarAdmin";
import TopBarAdmin from "./TopBarAdmin";


const MainLayout = () => {
const ruolo = localStorage.getItem("ruolo");
const isAdmin = ruolo === "ADMIN";
  return (
    <>
      {isAdmin ? <TopBarAdmin /> : <TopBar />}
      {isAdmin ? <SidebarAdmin /> : <Sidebar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
