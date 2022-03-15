import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import FadeLoader from "react-spinners/FadeLoader";
import { compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <FadeLoader
          color="#0d6efd"
          height={25}
          width={5}
          radius={15}
          margin={10}
          speedMultiplier={1.5}
        />
      );
    }

    return (
      <Container>
        <Row className="bg-primary">
          <Col>
            <HeaderContainer />
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="bg-info">
            <Navbar />
          </Col>
          <Col sm={8} className="bg-warning">
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </React.Suspense>
                );
              }}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainApp;
