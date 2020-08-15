import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Form, FormControl} from 'react-bootstrap';
import Logo from '../../assets/svgs/Logo';
import { Link } from 'react-router-dom';
import Header from './Header';

const Login = (props) => {

    const { theme } = props;

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

    const login = () => {
        
    }

    return (
        <div className="custom-card" style={{color: theme.colors.text, backgroundColor: theme.colors.background2, marginTop: '10vh'}}>
            <Header {...props} />

            <Row className="d-flex justify-content-center pb-5">
                <Col md={7}>
                    <h2 className="text-center">Login</h2>
                    <FormControl 
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={user.username}
                        className="mb-2"
                    />
                    <FormControl 
                        type="text"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                        className="mb-2"
                    />
                    <button onClick={login} className="btn btn-block btn-custom mb-2" >Login</button>
                    <Link to={'/signup'} className="btn btn-block btn-custom clear-link" >Go to Sign Up</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
