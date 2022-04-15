import React from 'react';
import './App.css';

//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


// Import components
import Login from './components/login';
import Signup from './components/signup';
import ForgetPassword from './components/forget_password';
import Footer from './components/footer';
import ResetPassword from './components/reset_password';
import Dashboard from './components/dashboard';
import ShortenUrl from './components/shorten_url';
import UrlCount from './components/url_count';

function App() {

    return (

        <BrowserRouter >
            <Routes >
                <Route path = "/" element = { <Login /> } />
                <Route path = "/login/:msg" element = { <Login /> }/>
                <Route path = "/sign-up" element = { <Signup /> } />
                <Route path = "/forget-password" element = { <ForgetPassword /> } />
                <Route path = "/reset-password/:id" element = { <ResetPassword /> } />
                <Route path = "/dashboard" element = { <Dashboard /> } />
                <Route path = "/shorten_url" element = { <ShortenUrl /> } />
                <Route path = "/url_count" element = { <UrlCount /> } />
                </Routes>
            <Footer />
        </BrowserRouter>

    )
};

export default App;