import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Form, FormControl} from 'react-bootstrap';
import Logo from '../../assets/svgs/Logo';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

const Signup = (props) => {

    const { theme, setAuthState } = props;

    const initialUser = {
        username: '',
        password: ''
    }
    const [user, setUser] = useState(initialUser)

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const signUp = (event) => {
        event.preventDefault();
        console.log('(Signup) username: ', user.username);
        console.log('(Signup) password: ', user.password);
        // Request to server
        axios.post('/signup', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            console.log("(Signup) response >>>", res);
            if (res.data) {
                console.log("(Signup) successful signup");
                // REDIRECT to login 
                    // OR
                // login automatically and redirect to setAuthState to 'logged in'

            } else {
                console.error('(Signup) signup error');
            }
        })
        .catch(err => console.error("(Signup) signup error >>>", err))
    }

    return (
        <div className="custom-card" style={{color: theme.colors.text, backgroundColor: theme.colors.background2, marginTop: '10vh'}}>
            <Header {...props} />

            <Row className="d-flex justify-content-center pb-5">
                <Col md={7}>
                    <h2 className="text-center">Sign Up</h2>
                    <FormControl 
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={user.username}
                        className="mb-2 text-center"
                    />
                    <FormControl 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                        className="mb-2 text-center"
                    />
                    <button onClick={signUp} className="btn btn-block btn-custom mb-2" >Sign Up</button>
                    <Link to={'/login'} className="btn btn-block btn-custom clear-link" >Go to Login</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Signup;
