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

const Layout = (props) => {
    var theme = darkTheme;

    const globalProps = {
        theme
    };

    return (
        <div className="custom-body" style={{background: theme.colors.background, color: theme.colors.text}}>
            <Container fluid className="px-0">
                <Router>

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

                </Router>
            </Container>
        </div>
    )
}

export default Layout;
