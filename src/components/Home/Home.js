import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Form} from 'react-bootstrap';

const Home = (props) => {

    const { theme } = props;

    return (
        <div className="custom-card" style={{color: theme.colors.text, backgroundColor: theme.colors.background2}}>

        </div>
    )
}

export default Home;
