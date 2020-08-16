import React, {useState, useEffect} from 'react';
import {
    Row, 
    Col, 
    Container, 
    Navbar, 
    NavDropdown, 
    Nav, 
    Form, 
    Button, 
    FormControl
  } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const SideMenu = (props) => {
    const {theme, history, username} = props;

    const [profileBtn, setProfileBtn] = useState('inherit');
    const [signoutBtn, setSignoutBtn] = useState('inherit');

    return (
        <div className="side-menu">
            <div className="mb-4 bottom-border" style={{borderBottomColor: theme.colors.accent}}>
                <div 
                    className="d-flex align-items-center mb-4 custom-navbar-item pl-2" 
                    onMouseEnter={() => setProfileBtn(theme.colors.accent)}
                    onMouseLeave={() => setProfileBtn('inherit')}
                    style={{backgroundColor: profileBtn}}
                >
                    <i className="fas fa-user-circle fa-2x"></i>
                    <div className="ml-3">{username}</div>
                </div>
                <div 
                    className="d-flex align-items-center mb-4 custom-navbar-item pl-2" 
                    onMouseEnter={() => setSignoutBtn(theme.colors.accent)}
                    onMouseLeave={() => setSignoutBtn('inherit')}
                    style={{backgroundColor: signoutBtn}}
                >
                    <i className="fas fa-sign-out-alt fa-2x"></i>
                    <div className="ml-3">Sign Out</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SideMenu);