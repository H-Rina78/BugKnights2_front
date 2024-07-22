import SimpleHeader from "../SimpleHeader";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const NewUser = () => {
    const [, setCookies] = useCookies('');

    const navigate = useNavigate();

    const handleClickLogin = () => {
        setCookies('loginInfo', '1');
        navigate("/");
    }

    const btnStyle = {
        hight:'20px',
        width:'170px'
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
                <Row className="my-5 text-center">
                    <h3>ユーザー登録</h3>
                    <Col className="h2 mt-4 text-center">
                        ユーザー登録が完了しました。
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
                <Row className="my-4 justify-content-center">
                    <Col className="d-flex align-items-center justify-content-center">
                        <Button className="ms-3 mb-3" onClick={handleClickLogin} style={btnStyle}>お買い物を始める</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default NewUser;