import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const SecretRevision = () => {  
    const navigate = useNavigate();
    const handleClickMypage = () => navigate("/Mypage");

    const location = useLocation();
    const [id] = useState(location.state.secretData.id);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    console.log('id', id);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', id);
        formData.append('oldPassword', oldPassword);
        // fetch('https://bugknights-b.azurewebsites.net/passwordRevision', {
        fetch('http://localhost:8080/matchPassword', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            if(data){
                setModalShow(true);
            } else {
                setModalShow(false);
            }
        })
        .catch(error => console.error(error));
    };

    const MyVerticallyCenteredModal = (props) => {
        const updateData = () => {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('newPassword', newPassword);
            fetch('http://localhost:8080/passwordRevision', {
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
                                <p>変更しますか？</p>
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
            <Button className="ms-2" onClick={handleClickMypage}>戻る</Button>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Row className="text-center">
                        <p style={{fontSize:'20px'}}>パスワードを入力してください。</p>
                    </Row>
                    <Col className='my-3' xs={12} md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId="formBasicPassword">
                                <Form.Label>現在のパスワード</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="パスワード"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId="formBasicPassword">
                                <Form.Label>新しいパスワード</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="パスワード"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
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
};

export default SecretRevision;