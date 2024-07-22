import { Container, Row } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";



const MyPage = () =>{
    const [, setCookies] = useCookies('');
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const handleClickLogout = () => {
        setCookies('loginInfo', '0');
        navigate("/");
    }

    const basicInfoRevision = () => {
        navigate("/basicRevision", {
            state: {
                basicData: {
                    lastName: user.lastName, firstName: user.firstName,
                    address: user.address,
                    tel: user.tel
                }
            }
        });
    }

    const mailRevision = () => {
        navigate("/mailRevision", {
            state: {
                mailData: {
                    mail: user.mail
                }
            }
        });
    }

    const secretInfoRevision = () => {
        navigate("/secretInfoRevision", {
            state: {
                secretData : {
                    id: user.id
                }
            }
        });
    }

    useEffect(() => {
        fetch('http://localhost:8080/bk/getUserCookie', {
            method: 'GET',
            credentials: 'include' // クッキーを含めるためのオプション
        })
        .then(response => response.text())
        .then(data => {
            if(data !== '') {
                console.log(data);
                setUser(JSON.parse(data));
            }
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const AllStyle = {
        backgroundColor: "#eaeaea",
    }

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    const boxStyle = {
        border: "solid 2px #eaeaea",
        padding: "8px",
        margin: "8px"
      }

    return(
        <>
        <SimpleHeader />
        <header style={AllStyle}>
            <Row>
                <Col className="col-10"><h2 className="ps-3 py-2">マイページ</h2></Col>
                <Col className="col-2 d-flex align-items-center justify-content-end"><Button className="me-2"style={btnStyle} onClick={handleClickLogout}>ログアウト</Button></Col>
            </Row>
        </header>
        <Button className="ms-3 my-2" onClick={handleClick} style={btnStyle}>戻る</Button>
        <Container >
            <Row  className="ms-5" style={boxStyle}>
                <Row className="my-2 text-center"><h3>登録情報</h3></Row>
                    <Row className="justify-content-center">
                        <Col className="col-8">
                            <h5 className="py-2 ps-2" style={AllStyle}>基本情報</h5>
                            <Row className="mb-3">
                                <Col className="col-7 mt-2">
                                    <p className="offset-1">氏名　　　：<span className="ps-3">{user.lastName} {user.firstName}</span></p>
                                    <p className="offset-1">住所　　　：<span className="ps-3">{user.address}</span></p>
                                    <p className="offset-1">電話番号　：<span className="ps-3">{user.tel}</span></p>
                                </Col>
                                <Col className="col-4 ms-5 d-flex align-items-center justify-content-end">
                                    <Button style={btnStyle} onClick={basicInfoRevision}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>メールアドレス</h5>
                            <Row  className="mb-3">
                                <Col className="col-7 mt-2">
                                    <p className="offset-1">メールアドレス：<span className="ps-3">{user.mail}</span></p>
                                </Col>
                                <Col className="col-4 ms-5 d-flex align-items-center justify-content-end">
                                    <Button style={btnStyle} onClick={mailRevision}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>ID・パスワード</h5>
                            <Row  className="mb-3">
                                <Col className="col-7 mt-2">
                                    <p className="offset-1">ユーザーID　：<span className="ps-3">{user.id}</span></p>
                                    <p className="offset-1">パスワード 　：<span className="ps-3">セキュリティ上非表示となっています。</span></p>
                                </Col>
                                <Col className="col-4 ms-5 d-flex align-items-center justify-content-end">
                                    <Button style={btnStyle} onClick={secretInfoRevision}>変更</Button>
                                </Col>
                            </Row>
                        </Col>    
                </Row>
           </Row>
        </Container>
        </>
    )
}

export default MyPage;