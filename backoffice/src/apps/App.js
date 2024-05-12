
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import '../apps/App.css'
// import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'';

import { useStateContext } from '../contexts/ContextProvider';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ThemeSettings from '../components/ThemeSettings';
import Footer from '../components/Footer';
import Ecommerce from '../pages/Ecommerce';
import Editor from '../pages/Editor';
import Customers from '../pages/Customers';
import Employees from '../pages/Employees';
import Orders from '../pages/Orders';
import Kanban from '../pages/Kanban';
import Calendar from '../pages/Calendar';
import ColorPicker from '../pages/ColorPicker';
import Line from '../pages/Charts/Line';
import Area from '../pages/Charts/Area';
import Bar from '../pages/Charts/Bar';
import Pie from '../pages/Charts/Pie';
import Financial from '../pages/Charts/Financial';
import ColorMapping from '../pages/Charts/ColorMapping';
import Pyramid from '../pages/Charts/Pyramid';
import Stacked from '../pages/Charts/Stacked';
import Profile from '../pages/profile/Profile';
import EditProfile from '../pages/profile/views/EditProfile';
import ProfileDetaills from '../pages/profile/views/ProfileDetaills';
import Product from '../pages/products/Product'
import ProductDetaills from '../pages/products/views/ProductDetaills'
import ProductList from '../pages/products/views/ProductList'
import AddProduct from '../pages/products/views/AddProduct'

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
     
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}
              <Outlet/>
              </div>
            <Footer />
          </div>
        </div>
     
    </div>
  );
};

export default App;