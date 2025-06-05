// components/Login.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import About from "./About";
import Predict from "./Predict";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin"))
  });

  const handleLogin = async () => {
    try {
      if (username === "test" && password === "12345678") {
        // const response = await axios.post("/api/login", { username, password });
        localStorage.setItem("isLogin", "true");
        navigate("/predict");
        window.location.reload();

      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  if (!isLogin){ return (<>
    < div style={{ width: '100%' }
    } className="d-flex justify-content-center align-items-center  bg-dark vh-100 w-100" >
      <Card style={{ width: '24rem' }} className="bg-secondary text-white p-4">
        <Card.Body>
          <Card.Title className="mb-4 text-center">Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-light">
                Your password must be 8-20 characters long and contain letters and numbers.
              </Form.Text>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div >

  </>
  )}
  else{
    <Predict/>
  }
};

export default Login;