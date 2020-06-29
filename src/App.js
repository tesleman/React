import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Bacground from "./Components/Bacground";
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import ProfileDetailContainer from "./Components/Profile/ProfileDetailContainer";
import StoriesContainer from "./Components/Stories/StoriesContainer";
import UsersContainer from "./Components/Users/UsercContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";



const App = () => {

    return (

        <div>
            <Bacground />
            <HeaderContainer/>
            <div className="container">
                <Sidebar/>



                <Route path={'/Detail/:userId?'} render={() => <ProfileDetailContainer/>}/>
                <Route path={'/Stories'}  render={() => <StoriesContainer/>}/>
                <Route path={'/Users'}  render={() => <UsersContainer/>}/>


            </div>


            <Footer />

        </div>


    );
}

export default App;
