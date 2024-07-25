import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const LoginInformation = () => {
  const btnStyle = {
    hight:'20px',
    width:'100px'
  }

  const [, setCookies] = useCookies('');

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('userId:', userId);
    console.log('Password:', password);
    const formData = new FormData();
    formData.append('id', userId);
    formData.append('password', password);
    fetch('http://localhost:8080/bk/login', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      if(data === 'true') {
        console.log('ログイン成功');
        navigate('/');
      } else {
        console.log('ログイン失敗');
        setMessage('IDまたはパスワードが誤っています。');
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
      <Button className="ms-2" onClick={handleClick} style={btnStyle}>戻る</Button>
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
                <Col xs={6} md={10} className='text-center'>
                  <p style={{color: 'red'}}>{message}</p>
                </Col>
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
