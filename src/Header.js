import { CiLogin } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import {LuUserCircle2} from "react-icons/lu";


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

     const MyPage = () => {
      return(
        <Button variant="outline-primary" id="button-login" onClick={handleMyPageClick}>
          <LuUserCircle2 size={24} />マイページ
        </Button>
      );
     }

    return(
      <Container fluid  style={headerStyle}>
        <Row >
          <Col className="h4">
            Aceネットスーパー
          </Col>
          <Col className="text-end fs-5">
            {props.checkLogin ?
              <MyPage /> : <Login />
            }
          </Col>
        </Row>
      </Container>
    );
   }
   export default Header;

   