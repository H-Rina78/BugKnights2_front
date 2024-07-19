import SimpleHeader from "../SimpleHeader";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NewUser = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    return (
        <>
            <SimpleHeader />
            <Container>
                <Row>
                    <Col className="h1 text-center">
                        新規ユーザー登録が完了しました。
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="ms-3 mb-3" onClick={handleClick} style={btnStyle}>戻る</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default NewUser;