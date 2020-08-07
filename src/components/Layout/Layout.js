import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Form} from 'react-bootstrap';
import { darkTheme, lightTheme } from '../../styles/theme';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.css';
// COMPONENTS
import Logo from '../../assets/svgs/Logo';

const Layout = (props) => {
    var theme = darkTheme;

    return (
        <div className="custom-body" style={{background: theme.colors.background}}>
            {/* <Logo size={100} /> */}
        </div>
    )
}

export default Layout;
