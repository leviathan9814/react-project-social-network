import React from "react";
import HeaderContainer from "../header/headerContainer";
import Navbar from "../navbar/navbar";
import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import UsersContainer from "../users/usersContainer";
import ProfileContainer from "../profile/profileContainer";
import Login from "../login/login";
import { compose } from "redux";
import { connect } from "react-redux";
import {initializeApp} from "../../redux/appReducer";
import Preloader from "../preloader/preloader";


import './app.css';

const MessagesContainer = React.lazy(() => import('../messages/messagesContainer'));
const TodoListContainer = React.lazy(() => import('../todoList/todoListContainer'));
const Weather = React.lazy(() => import('../weather/weather'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/messages" render={() => <React.Suspense fallback={<Preloader/>}>
                                                    <MessagesContainer />
                                                  </React.Suspense>}/>
            <Route path="/todo" render={() => <React.Suspense fallback={<Preloader/>}>
                                                <TodoListContainer />
                                              </React.Suspense>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/weather" render={() => <React.Suspense fallback={<Preloader/>}>
                                                    <Weather />
                                                  </React.Suspense>}/>
            <Route path="/login" render={() => <Login/>}/>
            <Route path="*" render={() => <div>404 not founded!</div>}/>
          </Switch>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
