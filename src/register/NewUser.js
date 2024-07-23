import { useState } from "react";
import SimpleHeader from "../SimpleHeader";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const NewUser = () => {

    const navigate = useNavigate();
    const handleClickLogin = () => navigate("/login");

    const location = useLocation();
    const [firstName] = useState(location.state.userData.firstName);
    const [lastName] = useState(location.state.userData.lastName);
    const [mail] = useState(location.state.userData.mail);
    const [password] = useState(location.state.userData.password);
    const [id] = useState(location.state.userData.id);
    
    const btnStyle = {
        hight:'20px',
        width:'250px'
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
                        <p className="ps-3 pt-3" style={textStyle}>ユーザーID　： <span>{id}</span></p>
                        <p className="ps-3 pt-1" style={textStyle}>氏名　　　： <span>{lastName} {firstName}</span></p>
                        <p className="ps-3 pt-1" style={textStyle}>メールアドレス： <span>{mail}</span></p>
                    </Col>
                </Row>
                <Row className="my-4 justify-content-center">
                    <Col className="d-flex align-items-center justify-content-center">
                        <Button className="ms-3 mb-3" onClick={handleClickLogin} style={btnStyle}>ログインしてお買い物を始める</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default NewUser;