import SimpleHeader from "../SimpleHeader";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const BasicRevision = () => {
    const [data, setData] = useState('');
    const location = useLocation();

    useEffect(() => {
        setData(location.state.basicData);
    }, [location]);

    console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <SimpleHeader />
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>氏名</Form.Label>
                        <Row md={1}>
                            <Col style={{display: 'flex'}}>
                                <Form.Control 
                                    className='me-3'
                                    type="text" 
                                    placeholder="LastName"
                                    required
                                />
                                <Form.Control 
                                    type="text" 
                                    placeholder="FirstName"
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
                        required
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>電話番号</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="tel"
                        required
                        />
                    </Form.Group>

                    <Row className="justify-content-center mb-3">
                        <Col xs={6} md={6}>
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
}
export default BasicRevision;