import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

const EMailRevision = () => {  
    const location = useLocation();
    const [mail, setMail] = useState(location.state.mailData.mail);

    console.log(mail);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <>
      <SimpleHeader />
      <Button className="ms-2">戻る</Button>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
            <Row className="text-center">
                <p style={{fontSize:'20px'}}>新しいメールアドレスを入力してください。</p>
            </Row>
            <Col className='my-3' xs={12} md={6}>
                <Form>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>メールアドレス</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="E-mail"
                            value={mail}
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

export default EMailRevision;