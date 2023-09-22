import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../redux/actions/userAction";
import countriesData from "../../../auxdata/countriesData.json";

const Signup = () => {
  const navto = useNavigate();
  const dispatch = useDispatch();

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const country = useRef(null);

  const handChangeData = (e) => {
    const signUpData = {
      username: username.current.value,
      email: email.current.value.toLowerCase(),
      password: password.current.value,
      country: country.current.value,
    };
    dispatch(signUp(signUpData));
  };

  let countryselect = countriesData.map((ctry) => (
    <option key={ctry.numericCode} value={ctry.name}>
      {ctry.name}
    </option>
  ));
  countryselect.unshift(
    <option disabled value="">
      Choose a country
    </option>
  );

  const handSubmitGoogle = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    const googleData = {
      username: userData.name,
      email: userData.email,
      password: userData.family_name+userData.sub,
    };
    dispatch(signUp(googleData));
    navto("/SignIn");
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Create Account
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          className="input"
                          name="name"
                          type="text"
                          placeholder="Enter Name"
                          ref={username}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          className="input"
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          ref={email}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          className="input"
                          name="password"
                          type="password"
                          placeholder="Password"
                          ref={password}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbo">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          className="input"
                          name="country"
                          placeholder="Country"
                          defaultValue={""}
                          ref={country}
                        >
                        {countryselect}
                        </Form.Select>
                      </Form.Group>
                      <div className="d-grid">
                        <Button onClick={handChangeData} variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="py-3 text-center">
                      <div className="border border-1"></div>
                      <Card.Text>Or Sign Up with your Google Account</Card.Text>

                      <div>
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
                      <div className="mb-0  text-center">
                        Already have an account??{" "}
                        <Link to={"/SignIn"} className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
