import SimpleHeader from "../SimpleHeader";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NewUser = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/login");

    const handleTopBackClick = () => navigate("/");

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    const textStyle = {
        fontSize:'20px'
    }

    const AllStyle = {
        backgroundColor: "#eaeaea",
        border: "solid 2px #000000",
        margin: "10px"
    }

    const style = {
        borderBottom: "solid 2px #000000"
    }

    return (
        <>
            <SimpleHeader />
            <Container>
                <Row className="text-center">
                    <h3>ユーザー登録</h3>
                    <Col className="h2 text-center">
                        新規ユーザー登録が完了しました。
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6" style={AllStyle}>
                    <Row className="px-3 py-2" style={style}><h4>登録情報</h4></Row>
                        <p className="ps-3 pt-3" style={textStyle}>ユーザーID　：<span>Taroudayonyon4</span></p>
                        <p className="ps-3 pt-1" style={textStyle}>氏名　　　：<span>田中太郎</span></p>
                        <p className="ps-3 pt-1" style={textStyle}>メールアドレス：<span>tanakatarou@exam.com</span></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="ms-3 mb-3" onClick={handleClick} style={btnStyle}>ログイン</Button>
                    </Col>
                    <Col>
                        <Button className="ms-3 mb-3" onClick={handleTopBackClick} style={btnStyle}>商品を見る</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default NewUser;