import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

const EMailRevision = () => {

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

  return (
    <>
      <SimpleHeader />
      <Button className="ms-2">戻る</Button>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
            <Row className="text-center">
                <p style={{fontSize:'20px'}}>新しいメールアドレスを入力してください。</p>
            </Row>
            <Col className='my-5' xs={12} md={6}>
                <Form>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="E-mail"
                    required
                    />
                </Form.Group>
                <Row className="justify-content-center mb-3">
                    <Col xs={6} md={6}>
                    <Button style={btnStyle} variant="primary" type="submit" className="w-100">
                        変更する
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

export default EMailRevision;
