import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import FrigoPage from './components/Pages/Frigo/FrigoPage';
import ShopPage from './components/Pages/Shop/ShopPage';
import HomePage from './components/Pages/Home/HomePage';
import TopBar from './components/Layout/TopBar';
import Sidebar from './components/Layout/Sidebar';
import ProductTemplate from './components/Pages/Frigo/ProductTemplate';
import RecipePage from './components/Pages/Recipe/RecipePage';

function App() {

  return (
    <>
    <BrowserRouter>
    <TopBar/>
        <Routes>
          <Route path="/" element={<HomePage nome="davide !"/>}/>
          <Route path="/frigoPage" element={<FrigoPage />} />
          <Route path="/shopPage" element={<ShopPage />} />
          <Route path="/recipePage" element={<RecipePage />} />
          <Route path="/productTemplate" element={<ProductTemplate/>}/>
        </Routes>
    <Sidebar/>
    </BrowserRouter>
    </>
  );
}

export default App
