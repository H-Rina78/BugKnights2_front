import { CiLogin } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { useState } from "react";
import {LuUserCircle2} from "react-icons/lu";
import { useCookies } from "react-cookie";


const Header = (props) =>{
    const headerStyle = {
      fontSize: 24,
      padding: 16,
      marginTop: 0,
      marginBottom: 10,
      color: 'rgb(18, 122, 216)',
      borderBottom: 'solid',
    }

    const [cookies, setCookies] = useCookies('');

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate("/login");
    }

    const handleMyPageClick = () => {
      navigate("/MyPage");
    }

    const Login = () => {
      return(
        <Button variant="outline-primary" id="button-login" onClick={handleLoginClick}>
          <CiLogin size={24} />ログイン
        </Button>
      );
     }

     const MyVerticallyCenteredModal = () => {
      const handleLogoutClick = () => {
        setCookies('loginInfo', "0");
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
              ログアウトしますか？
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col className="text-center">
                <Button variant="danger" className="me-3" onClick={handleLogoutClick}>ログアウト</Button>
                <Button onClick={props.onHide}>キャンセル</Button>
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
            <LuUserCircle2 size={24} />ログアウト
          </Button>

          <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
        </>
      );
  }
    return(
      <Container fluid  style={headerStyle}>
        <Row >
          <Col className="h4">
            Aceネットスーパー
          </Col>
          <Col className="text-end fs-5">
            {(cookies.loginInfo === 0) &&
              <Login />
            }
            {(cookies.loginInfo === 1) &&
              <User />
            }
          </Col>
        </Row>
      </Container>
    );
   }
   export default Header;

   