import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./page-css/sidenav.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import  Cart  from "./pages/Cart";
import Mooo from "./pages/AdminLogin";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
// import AdminForm from "./pages/AdminForm";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import MapBiding from "./pages/MapBinding";
import Catalog from "./components/Catalog";
import AppContext, { AppProvider } from "./context/AppContext";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import StoreFront from "./pages/StoreFront";
import Reviews from "./pages/Reviews";
import EcoModal from "./components/Modal";
import Page_404 from "./pages/404";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ToastContainer position="top-left" autoClose={2000} />
    <React.StrictMode>
      <AppProvider>
        <AuthProvider>
          <BrowserRouter>
            {/* Same as */}
            <EcoModal></EcoModal>
            <div id="overlay-nav"></div>
            <NavBar />
            <Catalog />
            <Routes>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="admin-dashboard" element={<AdminDashboard />} />
              <Route path="store/:id" element={<StoreFront />} />
              <Route path="reviews" element={<Reviews />} />
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
  </>
);
