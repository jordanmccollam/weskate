import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {Row, Col, Container, Navbar, NavDropdown, Nav, Form, Button, FormControl, Dropdown} from 'react-bootstrap';
import Logo from '../../assets/svgs/Logo';

const CustomNavbar = (props) => {
  const {theme, history} = props;

  const [firstTab, setFirstTab] = useState('inherit');
  const [secondTab, setSecondTab] = useState('inherit');
  const [thirdTab, setThirdTab] = useState('inherit');

  const [tab, setTab] = useState('home');

  useEffect(() => {
    setActiveTab();
    history.listen(() => {
      setActiveTab();
    })
  }, [])

  const setActiveTab = () => {
    var path = history.location.pathname;
    if (path.includes('teams') || path.includes('members')) {
      setTab('teams');
    }
    else if (path.includes('users')) {
      setTab('users');
    }
  }

  return (
    <Container fluid className="mx-0 px-0">
      <div className="custom-navbar" style={{backgroundColor: theme.colors.background2, borderBottomColor: theme.colors.accent}}>

      <Link to={'/'} className="clear-link custom-nav-left d-none d-md-flex align-items-center">
        <Logo size={40} color={theme.colors.primary} />
        <h1>WeSkate</h1>
      </Link>

        <div className="d-flex">
          <div className='pt-2 nav-border-bottom' style={tab === 'home' ? {color: theme.colors.primary, borderBottomColor: theme.colors.primary} : {borderBottomColor: theme.colors.accent}}>
            <Link 
              to={'/'} 
              onClick={() => setTab('home')}
              className="px-5 clear-link custom-navbar-item d-flex align-items-center"
              onMouseEnter={() => setFirstTab(theme.colors.accent)}
              onMouseLeave={() => setFirstTab('inherit')}
              style={{backgroundColor: firstTab}}
              data-toggle="tooltip" 
              data-placement="bottom" 
              title="HOME"
            >
              <i className="fas fa-home fa-2x"></i>
            </Link>
          </div>
          <div className='pt-2 nav-border-bottom' style={tab === 'spots' ? {color: theme.colors.primary, borderBottomColor: theme.colors.primary} : {borderBottomColor: theme.colors.accent}}>
            <Link 
              to={'/spots'} 
              onClick={() => setTab('spots')}
              className="px-5 clear-link custom-navbar-item d-flex align-items-center"
              onMouseEnter={() => setSecondTab(theme.colors.accent)}
              onMouseLeave={() => setSecondTab('inherit')}
              style={{backgroundColor: secondTab}}
              data-toggle="tooltip" 
              data-placement="bottom" 
              title="SPOTS"
            >
              <i className="fas fa-road fa-2x"></i>
            </Link>
          </div>
          <div className='pt-2 nav-border-bottom' style={tab === 'learn' ? {color: theme.colors.primary, borderBottomColor: theme.colors.primary} : {borderBottomColor: theme.colors.accent}}>
            <Link 
              to={'/learn'} 
              onClick={() => setTab('learn')}
              className="px-5 clear-link custom-navbar-item d-flex align-items-center"
              onMouseEnter={() => setThirdTab(theme.colors.accent)}
              onMouseLeave={() => setThirdTab('inherit')}
              style={{backgroundColor: thirdTab}}
              data-toggle="tooltip" 
              data-placement="bottom" 
              title="LEARN"
            >
              <i class="fas fa-graduation-cap fa-2x"></i>
            </Link>
          </div>
        </div>

        <Dropdown className="custom-nav-right d-none d-md-block">
          <Dropdown.Toggle variant="clear" size="lg" style={{color: theme.colors.text}}>
            Signed in as, Username
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
    </Container>
  )
};

export default withRouter(CustomNavbar);