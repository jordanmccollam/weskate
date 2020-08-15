import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Row, Col, Container, Form} from 'react-bootstrap';
import { darkTheme, lightTheme } from '../../styles/theme';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.css';
import '../../styles/navbar.css';
// COMPONENTS
import Logo from '../../assets/svgs/Logo';
import Home from '../Home/Home';
import CustomNavBar from './Navbar';
import SideMenu from './SideMenu';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import axios from 'axios';

const Layout = (props) => {
    // OTHER VARIABLES -----------------------------------
    var theme = darkTheme;


    // STATES --------------------------------------------
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);


    // USE EFFECT | ON START UP --------------------------
    useEffect(() => {
        getUser();
    }, [loggedIn])
    

    const getUser = () => {
        axios.get('/user/').then(res => {
            console.log("Get user response: ", res.data);
            if (res.data.user) {
                console.log("Get user: There is a user saved in the server session: ");
                setLoggedIn(true);
                setUsername(res.data.user.username);
            } else {
                console.log("Get user: no user");
                setLoggedIn(false);
                setUsername(null);
            }
        })
    }

    const logout = () => {
        axios.post('/user/logout', {})
        .then(res => {
            console.log("logout response: ", res);
            if (res.status === 200) {
                setLoggedIn(false);
                setUsername(null)
            }
        })
        .catch(err => console.error('logout Error >>> ', err))
    }

    // PROPS ---------------------------------------------
    const globalProps = {
        theme,
        loggedIn,
        setLoggedIn,
        username,
        setUsername,
        logout
    };


    if (loggedIn) {
        return (
            <div className="custom-body" style={{background: theme.colors.background, color: theme.colors.text}}>
                <Container fluid className="px-0">
                    <Router>
                        <Switch >

                            {/* TOP MENU */}
                            <CustomNavBar {...props} {...globalProps} />

                            {/* ROUTES / CONTENT */}
                            <Container fluid className="mt-4">
                                <Row>
                                    <Col md={2} >
                                        <SideMenu {...props} {...globalProps} />
                                    </Col>
                                    <Col md={8} >
                                        <div className="content-container" style={{overflow: 'hidden'}}>
                                            <Switch>
                                                <Route
                                                    exact path="/"
                                                    render={() => <Home {...globalProps} />}
                                                />
                                                <Route
                                                    path="*"
                                                    render={() => <Home {...globalProps} />}
                                                />
                                            </Switch>
                                        </div>
                                    </Col>
                                    <Col md={2} >

                                    </Col>
                                </Row>
                            </Container>
                        </Switch>
                    </Router>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="custom-body" style={{background: theme.colors.background, color: theme.colors.text}} >
                <Container >
                    <Row className="d-flex justify-content-center">
                        <Col md={7}>
                            <Router>
                                <Switch >
                                    <Route
                                        exact path="/"
                                        render={() => <Login {...globalProps} />}
                                    />
                                    <Route
                                        exact path="/login"
                                        render={() => <Login {...globalProps} />}
                                    />
                                    <Route
                                        exact path="/signup"
                                        render={() => <Signup {...globalProps} />}
                                    />
                                    <Route
                                        path="*"
                                        render={() => <Login {...globalProps} />}
                                    />
                                </Switch>
                            </Router>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Layout;
