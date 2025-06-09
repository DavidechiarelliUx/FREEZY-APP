import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import FrigoPage from './components/Pages/Frigo/FrigoPage';
import ShopPage from './components/Pages/Shop/ShopPage';
import HomePage from './components/Pages/Home/HomePage';;
import ProductTemplate from './components/Pages/Frigo/ProductTemplate';
import RecipePage from './components/Pages/Recipe/RecipePage';
import LoginPage from './components/LandingPage/LoginPage';
import AuthLayout from './components/Layout/AuthLayout';
import MainLayout from './components/Layout/MainLayout';
import PrivateRoute from './components/Layout/PrivateRoutes';
import SignUpPage from './components/LandingPage/SignUpPage';
import AdminPage from './components/Admin/AdminPage';
import ProductTemplateManager from './components/Admin/ProductTemplateManager';
import RecipeManager from './components/Admin/RecipeManager';
import FormProductTemplate from './components/Admin/FormProductTemplate';
import FormRecipe from './components/Admin/FormRecipe';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Pagine pubbliche senza TopBar / Sidebar */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* Pagine protette con layout + controllo token */}
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/frigoPage" element={<FrigoPage />} />
            <Route path="/shopPage" element={<ShopPage />} />
            <Route path="/recipePage" element={<RecipePage />} />
            <Route path="/productTemplate" element={<ProductTemplate />} />
            <Route path="/adminPage" element={<AdminPage />} />
            <Route path="/productManager" element={<ProductTemplateManager />} />
            <Route path="/recipeManager" element={<RecipeManager />} />
            <Route path="/form-product-template" element={<FormProductTemplate />} />
            <Route path="/form-product-template/:id" element={<FormProductTemplate />} />
            <Route path="/form-recipe" element={<FormRecipe />} />
            <Route path="/form-recipe/:id" element={<FormRecipe />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
