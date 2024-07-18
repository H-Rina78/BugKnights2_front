import { CiLogin } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { PiUserCircleLight } from "react-icons/pi";
import MyPage from "./mypage/MyPage";

const Header = (props) =>{
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

    const User = () => {
      const [modalShow, setModalShow] = useState(false);

      return(
        <>
          <Button variant="outline-primary" id="button-login" onClick={handleMyPageClick}>
            <PiUserCircleLight size={24} />マイページ
          </Button>
        </>
      );
     }

    console.log(props.loginInfo);
    return(
      <Container fluid  style={headerStyle}>
        <Row >
          <Col className="h4">
            Aceネットスーパー
          </Col>
          <Col className="text-end fs-5">
            {(props.loginInfo === 0) &&
              <Login />
            }
            {(props.loginInfo === 1) &&
              <User />
            }
          </Col>
        </Row>
      </Container>
    );
   }
   export default Header;

   