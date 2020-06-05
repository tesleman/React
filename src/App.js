import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


import './App.css';
import Sidebar from "./Components/Sidebar";
import Header from './Components/Header';
import Profile from "./Components/Profile";
import Bacground from "./Components/Bacground";
import Stories from "./Components/Stories";
import Footer from "./Components/Footer";


const App = () => {
    return (
        <div>
            <Bacground/>
            <Header/>
            <div className="container">
                <Sidebar/>
                <Profile/>
                <Stories/>
            </div>
            <div className="test"></div>
            <Footer />

        </div>


    );
}

export default App;
