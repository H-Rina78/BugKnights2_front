import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

const LoginInformation = () => {
  const [cookies, setCookies] = useOutletContext();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('userId:', userId);
    console.log('Password:', password);
    const formData = new FormData();
    formData.append('id', userId);
    formData.append('password', password);
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      if(data) {
        setCookies('loginInfo', '1');
        console.log(cookies.loginInfo);
        navigate("/")
      }
    })
    .catch(error => console.error(error));
  };

  const registerStyle = {
    color: 'blue'
  }

  const handleRegisterClick = () => {
    navigate("/register");
  }

  return (
    <>
      <SimpleHeader />
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>ユーザーID</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="UserID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formBasicPassword">
                <Form.Label>パスワード</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Row className="justify-content-center mb-3">
                <Col xs={6}>
                  <Button variant="primary" type="submit" className="w-100">
                    ログインする
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className='justify-content-center' onClick={handleRegisterClick} >
            <Col className='col-2 text-center' style={registerStyle}>
                新規登録はこちらから
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginInformation;
