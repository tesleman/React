import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from './Components/Header/Header';
import Profile from "./Components/Profile/Profile";
import Bacground from "./Components/Bacground";

import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import ProfileDetail from "./Components/Profile/ProfileDetail";
import StoriesContainer from "./Components/Stories/StoriesContainer";


const App = () => {

    return (

        <div>
            <Bacground />
            <Header/>
            <div className="container">
                <Sidebar/>
                <Profile/>

                <Route path={'/Detail'} render={() => <ProfileDetail/>}/>
                <Route path={'/Stories'}  render={() => <StoriesContainer/>}/>


            </div>


            <Footer />

        </div>


    );
}

export default App;
