import SimpleHeader from "../SimpleHeader";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const BasicRevision = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const handleClickMypage = () => navigate("/Mypage");
    
    const [lastName, setLastName] = useState(location.state.basicData.lastName);
    const [firstName, setFirstName] = useState(location.state.basicData.firstName);
    const [address, setAddress] = useState(location.state.basicData.address);
    const [tel, setTel] = useState(location.state.basicData.tel);
    const [id] = useState(location.state.basicData.id);
    console.log('ID', id);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    console.log('苗字', lastName);
    console.log('名前', firstName);
    console.log('住所', address);
    console.log('電話番号', tel);

    const MyVerticallyCenteredModal = (props) => {
        const updateData = () => {
            const formData = new FormData();
            formData.append('lastName', lastName);
            formData.append('firstName', firstName);
            formData.append('address', address);
            formData.append('tel', tel);
            formData.append('id', id);
            fetch('http://localhost:8080/basicRevision', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                navigate("/Mypage");
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
                    <p>氏名：{lastName} {firstName}</p>
                    <p>住所：{address}</p>
                    <p>電話番号：{tel}</p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col className="text-center">
                        <Button variant="primary" className="me-3" onClick={updateData}>変更する</Button>
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
            <Button className="ms-2" style={btnStyle} onClick={handleClickMypage}>戻る</Button>
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

                    <Row className="justify-content-center mb-3">
                        <Col xs={6} md={6}>
                            <Button variant="primary" type="submit" className="w-100" onClick={() => setModalShow(true)}>
                                変更する
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
}
export default BasicRevision;