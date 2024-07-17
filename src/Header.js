import { CiLogin } from "react-icons/ci";
import { LuUserCircle2 } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const Header = () =>{
    const headerStyle = {
      fontSize: 24,
      padding: 16,
      marginTop: 0,
      marginBottom: 10,
      color: 'rgb(18, 122, 216)',
      borderBottom: 'solid',
    }


    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate("/login");
    }

    

    const Login = () => {
      return(
        <Button variant="outline-primary" id="button-login" onClick={handleLoginClick}>
          <CiLogin />ログイン
        </Button>
      );
     }
  
    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              ログアウトしますか？
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col className="text-center">
                <Button variant="danger" className="me-3">Logout</Button>
                <Button onClick={props.onHide}>Close</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      );
    }

    const User = () => {
      const [modalShow, setModalShow] = useState(false);

      return(
        <>
          <Button variant="outline-primary" id="button-login" onClick={() => setModalShow(true)}>
            <LuUserCircle2 />ログイン中
          </Button>

          <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
        </>
      );
     }

    const [loginStatus, setStatus] = useState('1');

    return(
      <Container fluid  style={headerStyle}>
        <Row >
          <Col className="h4">
            Aceネットスーパー
          </Col>
          <Col className="text-end fs-5">
            {(loginStatus === '0') &&
              <Login />
            }
            {(loginStatus === '1') &&
              <User />
            }
          </Col>
        </Row>
      </Container>
    );
   }
   export default Header;

   