import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './page-css/sidenav.css';
import './sass-files/home-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import PersonalData from './pages/PersonalData';
import StoreNewProduct from './pages/StoreNewProduct';

import VendorProfile from './pages/VendorProfile';

import StoreNoAuth from './pages/StoreNoAuth';

import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Mooo from './pages/AdminLogin';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/AdminDashboard';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import StoreFront from './pages/StoreFront';
import MapBiding from './pages/MapBinding';
import AddNewProduct from './pages/AddNewProduct';

//components
// import AdminForm from "./pages/AdminForm";

import Footer from './components/Footer';
import Catalog from './components/Catalog';
import ReviewForm from './components/ReviewForm';
import Modal from './components/Modal';
import EcoModal from './components/Modal';
import PassModal from './components/ModalPassChange';
import MailModal from './components/ModalAddressChange';
import SellerSettings from './pages/SellerSettings';
import { ToastContainer } from 'react-toastify';
import AppContext, { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import Terms from './privacy/Terms';
import Privacy from './privacy/Privacy';
import Reviews from './pages/Reviews';
import Page_404 from './pages/404';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ToastContainer position="top-left" autoClose={2000} />
    <React.StrictMode>
      <AppProvider>
        <AuthProvider>
          <BrowserRouter>
            {/* Same as */}
            <EcoModal></EcoModal>
            <PassModal></PassModal>
            <MailModal></MailModal>
            <div id="overlay-nav"></div>
            <NavBar />
            <Catalog />
            <Routes>
              <Route index element={<Home />} />
              <Route path="personaldata" element={<PersonalData />} />
              <Route path="storenewproduct" element={<StoreNewProduct />} />
              <Route path="addnewproduct" element={<AddNewProduct />} />

              <Route path="vendorprofile" element={<VendorProfile />} />

              <Route path="storenoauth" element={<StoreNoAuth />} />
              <Route path="cart" element={<Cart />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="admin-dashboard" element={<AdminDashboard />} />
              <Route path="store/:id" element={<StoreFront />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="cart" element={<Cart />} />
              <Route path="sellersettings" element={<SellerSettings />} />
              {/*<Route*/}
              {/*  path="admin-dashboard/admin-form"*/}
              {/*  element={<AdminForm />}*/}
              {/*/>*/}
              <Route path="registration" element={<Registration />} />
              <Route path="map-binding" element={<MapBiding />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="admin-portal" element={<Mooo />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="*" element={<Page_404 />} />
              {/* <Route path="reviewform" element={<ReviewForm />} /> */}
            </Routes>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </AppProvider>
    </React.StrictMode>
  </>,
);
