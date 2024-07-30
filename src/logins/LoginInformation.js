import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';

const LoginInformation = () => {
  const btnStyle = {
    hight:'20px',
    width:'100px'
  }

  const [, setCookies] = useCookies('');

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
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
    fetch('https://bugknights-b.azurewebsites.net/bk/login', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      if(data !== 'false') {
        console.log('ログイン成功');
        setCookies('loginSession', data);
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
              <Form onSubmit={handleSubmit} >
              <Row>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                  <Form.Label>ユーザーID</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="UserID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row md={12}>
                <Form.Group className='mb-3' controlId="formBasicPassword">
                  <Form.Label>パスワード</Form.Label>
                  <InputGroup>
                      <Form.Control 
                        type={passwordType} 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className='p-2'>
                        {passwordType === "password" && (
                            <FaRegEye
                              size={24}
                              onClick={() => setPasswordType("text")}
                              className="Password__visual"
                            />
                        )}
                        {passwordType === "text" && (
                            <FaRegEyeSlash
                              size={24}
                              onClick={() => setPasswordType("password")}
                              className="Password__visual"
                            />
                        )}
                      </div>
                  </InputGroup>
                </Form.Group>
              </Row>

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
        <Row className='justify-content-center'>
            <Col className='col-2 text-center' style={registerStyle}>
                <span onClick={handleRegisterClick} >新規登録はこちらから</span>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginInformation;
