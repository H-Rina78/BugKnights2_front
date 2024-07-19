import { Container, Row } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import { Modal } from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useState } from "react";
import LuUserCircle2 from "react-icons/lu";


const MyPage = () =>{

    const navigate = useNavigate();

    const handleClick = () => navigate("/");

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
                <Col className="col-2 d-flex align-items-center justify-content-end"><Button className="me-2"style={btnStyle}>ログアウト</Button></Col>
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
                                    <p className="offset-1">氏名　　　：<span className="ps-3">田中太郎</span></p>
                                    <p className="offset-1">住所　　　：<span className="ps-3">東京都江戸川区東小岩</span></p>
                                    <p className="offset-1">電話番号　：<span className="ps-3">123456789</span></p>
                                </Col>
                                <Col className="col-4 ms-5 d-flex align-items-center justify-content-end">
                                    <Button style={btnStyle}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>メールアドレス</h5>
                            <Row  className="mb-3">
                                <Col className="col-7 mt-2">
                                    <p className="offset-1">メールアドレス：<span className="ps-3">tanakatarou@exam.com</span></p>
                                </Col>
                                <Col className="col-4 ms-5 d-flex align-items-center justify-content-end">
                                    <Button style={btnStyle}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>ID・パスワード</h5>
                            <Row  className="mb-3">
                                <Col className="col-7 mt-2">
                                    <p className="offset-1">ユーザーID　：<span className="ps-3">Taroudayonyon4</span></p>
                                    <p className="offset-1">パスワード 　：<span className="ps-3">セキュリティ上非表示となっています。</span></p>
                                </Col>
                                <Col className="col-4 ms-5 d-flex align-items-center justify-content-end">
                                    <Button style={btnStyle}>変更</Button>
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