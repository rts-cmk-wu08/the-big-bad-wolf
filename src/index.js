import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from './pages/Shop';
import Details from "./pages/Details";
import Comparison from './pages/Comparison';
import Contact from './pages/Contact';
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";
import NotFound from './pages/NotFound';

import './index.css';
import App from './App';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>

            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Details />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<NotFound />} />

        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);