import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from "react-router-dom";

const SecretRevision = () => {  
    const navigate = useNavigate();
    const handleClickMypage = () => navigate("/Mypage");

    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <>
      <SimpleHeader />
      <Button className="ms-2" onClick={handleClickMypage}>戻る</Button>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
            <Row className="text-center">
                <p style={{fontSize:'20px'}}>新しいパスワードを入力してください。</p>
            </Row>
            <Col className='my-3' xs={12} md={6}>
                <Form>
                    <Form.Group className='mb-3' controlId="formBasicPassword">
                        <Form.Label>パスワード</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="パスワード"
                            required
                        />
                    </Form.Group>
                    <Row className="justify-content-center mb-3">
                        <Col xs={6} md={6}>
                        <Button variant="primary" type="submit" className="w-100">
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

export default SecretRevision;