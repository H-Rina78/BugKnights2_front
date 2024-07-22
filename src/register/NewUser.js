import { useState } from "react";
import SimpleHeader from "../SimpleHeader";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useLocation } from 'react-router-dom'

const NewUser = () => {

    const navigate = useNavigate();

    const handleClickLogin = () => {
        const formData = new FormData();
    formData.append('id', id);
    formData.append('password', password);
    console.log(id);
    console.log(password);
    fetch('http://localhost:8080/bk/login', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      if(data === 'true') {
        console.log('ログイン成功');
        navigate('/');
      } else {
        console.log('ログイン失敗');
      }
    })
    .catch(error => console.error(error));
    }

    const location = useLocation();
    const [firstName] = useState(location.state.userData.firstName);
    const [lastName] = useState(location.state.userData.lastName);
    const [mail] = useState(location.state.userData.mail);
    const [password] = useState(location.state.userData.password);
    const [id] = useState(location.state.userData.id);
    
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
                        <p className="ps-3 pt-3" style={textStyle}>ユーザーID　： <span>{id}</span></p>
                        <p className="ps-3 pt-1" style={textStyle}>氏名　　　： <span>{lastName} {firstName}</span></p>
                        <p className="ps-3 pt-1" style={textStyle}>メールアドレス： <span>{mail}</span></p>
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