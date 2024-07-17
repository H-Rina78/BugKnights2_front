import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LoginInformation = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  const registerStyle = {
    color: 'blue'
  }

  const navigate = useNavigate();

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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
