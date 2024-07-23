import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const UserIdRevision = () => {  
    const navigate = useNavigate();
    const handleClickMypage = () => navigate("/Mypage");

    const location = useLocation();
    const [currentId] = useState(location.state.secretData.id);
    const [id, setId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const MyVerticallyCenteredModal = (props) => {
        
        const updateData = () => {
            const formData = new FormData();
            formData.append('currentId', currentId);
            formData.append('id', id);
            // fetch('https://bugknights-b.azurewebsites.net/idRevision', {
            fetch('http://localhost:8080/idRevision', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('stateid', id);
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
                    <p>ユーザーID：{id}</p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col className="text-center">
                        <Button variant="primary" onClick={updateData} className="me-3">変更する</Button>
                        <Button variant="danger" onClick={props.onHide}>キャンセル</Button>
                    </Col>
                </Row>
            </Modal.Footer>
          </Modal>
        );
      }

      const [modalShow, setModalShow] = useState(false);


    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

  return (
    <>
      <SimpleHeader />
      <Button className="ms-2" style={btnStyle} onClick={handleClickMypage}>戻る</Button>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
            <Row className="text-center">
                <p style={{fontSize:'20px'}}>新しいユーザーIDを入力してください。</p>
            </Row>
            <Col className='my-3' xs={12} md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId="formBasicId">
                    <Form.Label>現在のユーザーID</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="ユーザーID"
                            value={currentId}
                            onChange={(e)=>setId(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicId">
                        <Form.Label>新しいユーザーID</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="ユーザーID"
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Row className="justify-content-center mb-3">
                        <Col xs={6} md={6}>
                        <Button variant="primary" type="submit" onClick={()=>setModalShow(true)} className="w-100">
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

export default UserIdRevision;