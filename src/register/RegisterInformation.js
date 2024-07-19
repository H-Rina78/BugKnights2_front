import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [userId, setUserId] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserID', userId);
    console.log('lastName', lastName);
    console.log('firstName', firstName);
    console.log('mail', email);
    console.log('Password:', password);

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('mail', email);
    fetch('http://localhost:8080/registCheck', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if(data){
            setModalShow(false);
            setMessage(data);
        } else {
            setModalShow(true);
        }
    })
    .catch(error => console.error(error));
    console.log(message);
  };

  const MyVerticallyCenteredModal = (props) => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/newuser");
    }
    const insertUser = () => {
      const formData = new FormData();
      formData.append('id', userId);
      formData.append('lastName', lastName);
      formData.append('firstName', firstName);
      formData.append('address', address);
      formData.append('tel', tel);
      formData.append('mail', email);
      formData.append('password', password);
      fetch('http://localhost:8080/regist', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
          console.log(data);
          handleRegisterClick();
      })
      .catch(error => console.error(error));
    }
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            入力内容確認
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
                <p>ユーザID：{userId}</p>
                <p>氏名：{lastName} {firstName}</p>
                <p>住所：{address}</p>
                <p>電話番号：{tel}</p>
                <p>メールアドレス：{email}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
            <Row>
                <Col className="text-center">
                    <Button variant="primary" className="me-3" onClick={insertUser}>登録</Button>
                    <Button variant="danger" onClick={props.onHide}>キャンセル</Button>
                </Col>
            </Row>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = useState(false);

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
                  required
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
                            required
                        />
                        <Form.Control 
                            type="text" 
                            placeholder="FirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </Col>
                </Row>
              </Form.Group>

              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>住所</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>電話番号</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>メールアドレス</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formBasicPassword">
                <Form.Label>パスワード</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Row className="justify-content-center mb-3">
                <Col xs={6} md={10} className='text-center'>
                  <p style={{color: 'red'}}>{message}</p>
                </Col>
                <Col xs={6} md={6}>
                  <Button variant="primary" type="submit" className="w-100">
                    新規登録
                  </Button>

                  <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />
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
