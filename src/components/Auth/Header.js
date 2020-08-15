import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Form} from 'react-bootstrap';
import Logo from '../../assets/svgs/Logo';

const Header = (props) => {

    const { theme } = props;

    return (
        <div className="d-flex justify-content-center pt-4 mb-5 bottom-border" style={{background: `linear-gradient(${theme.colors.background}, ${theme.colors.background2})`, borderColor: theme.colors.accent}}>
            <div className="mt-4" style={{position: 'relative'}}>
                <div style={{position: 'absolute', top: -35, left: 0}}>
                    <Logo size={50} color={theme.colors.primary} />
                </div>
                <h1 className="header">WeSkate</h1>
            </div>
        </div>
    )
}

export default Header;
