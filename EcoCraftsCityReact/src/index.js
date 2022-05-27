import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./page-css/sidenav.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
import AdminForm from "./pages/AdminForm";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import { AppProvider } from "./context/AppContext";
import SignIn from "./pages/SignIn";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
                <div id="overlay-nav"></div>
                <NavBar />
                <Catalog />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="admin-dashboard" element={<AdminDashboard />} />
                    <Route path="admin-dashboard/admin-form" element={<AdminForm />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="admin-portal" element={<AdminLogin />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>
);
