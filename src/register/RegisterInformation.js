import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [userId, setUserId] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserID', userId);
    console.log('lastName', lastName);
    console.log('firstName', firstName);
    console.log('mail', email);
    console.log('Password:', password);
    setUserId('');
    setLastName('');
    setFirstName('');
    setEmail('');
    setPassword('');
    // ここで新規ユーザ登録の処理を追加する
  };

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

              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>氏名</Form.Label>
                <Row md={1}>
                    <Col style={{display: 'flex'}}>
                        <Form.Control 
                            className='me-3'
                            type="text" 
                            placeholder="LastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Form.Control 
                            type="text" 
                            placeholder="FirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                </Row>
              </Form.Group>

              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>メールアドレス</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    新規登録
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterForm;
