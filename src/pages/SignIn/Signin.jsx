import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';

const Signin = () => {
  const navto = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);

  const handChangeData = (e) => {
    const signInData = {
      
      email: email.current.value.toLowerCase(),
      password: password.current.value,
      
    };
    dispatch(signIn(signInData));
  };

  const handSubmitGoogle = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    const googleData = {
      email: userData.email,
      password: userData.family_name+userData.sub,
    };
    dispatch(signIn(googleData));
    navto("/Home");
  };


  return (
    
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          className='input' 
                          type="email"
                          name="email"
                          ref={email} 
                          placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          className="input" 
                          type="password" 
                          name="password"
                          ref={password}
                          placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={handChangeData}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className='py-3'>
                    <div className="border border-1"></div>
                      <Card.Text className='py-2 text-center'>Or Sign Up with your Google Account</Card.Text>
                      <div className='text-center'>
                        <GoogleLogin
                          text="logingoogle"
                          onSuccess={handSubmitGoogle}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </div>
                      </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to={"/SignUp"} className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signin
