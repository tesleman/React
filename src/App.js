import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";

import Footer from "./Components/Footer/Footer";
import {Route, withRouter} from "react-router-dom";
import ProfileDetailContainer from "./Components/Profile/ProfileDetailContainer";
import StoriesContainer from "./Components/Stories/StoriesContainer";
import UsersContainer from "./Components/Users/UsercContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Container} from "react-bootstrap";
import LoginCont from "./Components/Login/Login";
import {initializeThunk} from "./redux/Redusers/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeThunk()
    }

    render() {

        if (!this.props.isLoading) {

            return <Preloader/>
        }

        return (

            <div >

                <HeaderContainer/>
                <Container>
                    <Sidebar/>


                    <Route path={'/Detail/:userId?'} render={() => <ProfileDetailContainer/>}/>
                    <Route path={'/Stories'} render={() => <StoriesContainer/>}/>
                    <Route path={'/Users'} render={() => <UsersContainer/>}/>
                    <Route path={'/Login'} render={() => <LoginCont/>}/>


                </Container>


                <Footer/>

            </div>


        );
    }
}


let mapStateToProps = (state) => {
    return {
        isLoading: state.app.isLoading
    }
}
export default compose(withRouter,
    connect(mapStateToProps, {initializeThunk}))(App)


