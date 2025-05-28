import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import FrigoPage from './components/Pages/Frigo/FrigoPage';
import ShopPage from './components/Pages/Shop/ShopPage';
import GamePage from './components/Pages/Game/GamePage';
import HomePage from './components/Pages/Home/HomePage';
import TopBar from './components/Layout/TopBar';
import Sidebar from './components/Layout/Sidebar';

function App() {

  return (
    <>
    <BrowserRouter>
    <TopBar/>
        <Routes>
          <Route path="/" element={<HomePage nome="davide !"/>}/>
          <Route path="/frigoPage" element={<FrigoPage />} />
          <Route path="/shopPage" element={<ShopPage />} />
          <Route path="/gamePage" element={<GamePage />} />
        </Routes>
    <Sidebar/>
    </BrowserRouter>
    </>
  );
}

export default App
