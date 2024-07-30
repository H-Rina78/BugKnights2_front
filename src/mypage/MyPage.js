import { Container, Row } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const MyPage = () =>{
    const [cookies, , removeCookies] = useCookies('');
    const [user, setUser] = useState({});
    const [order, setOrder] = useState([]);
    
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    const handleClickLogout = () => {
        removeCookies('loginSession');
        navigate("/");
    }

    const basicInfoRevision = () => {
        navigate("/basicRevision", {
            state: {
                basicData: {
                    lastName: user.lastName, firstName: user.firstName,
                    address: user.address,
                    tel: user.tel,
                    id: user.id
                }
            }
        });
    }

    const mailRevision = () => {
        navigate("/mailRevision", {
            state: {
                mailData: {
                    mail: user.mail,
                    id: user.id
                }
            }
        });
    }

    const UserIdRevision = () => {
        navigate("/UserIdRevision", {
            state: {
                secretData : {
                    id: user.id
                }
            }
        });
    }

    const passwordRevision = () => {
        navigate("/secretInfoRevision", {
            state: {
                secretData : {
                    id: user.id
                }
            }
        });
    }

    useEffect(() => {
        const formData = new FormData();
        formData.append('session', cookies.loginSession);
        fetch('http://localhost:8080/bk/getUserCookie', {
            method: 'POST',
            body: formData,
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
    }, [cookies.loginSession]);

    useEffect(() => {
        if(Object.keys(user).length !== 0){
            const formData = new FormData();
            formData.append('id', user.id);
            fetch('http://localhost:8080/orderHistory', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data !== null && data.length !== 0) {
                    setOrder(data);
                }
            })
            .catch(error => console.error(error));
        }
    }, [user]);

    const AllStyle = {
        backgroundColor: "#eaeaea",
    }

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    const btnChangeStyle = {
        hight:'10px',
        width:'60px'
    }

    const boxStyle = {
        border: "solid 2px #eaeaea",
        padding: "8px",
        margin: "8px"
    }
    console.log(order);

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
                                <Col className="col-10 mt-2 ps-0">
                                    <Row className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">氏名　　　：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <p className="ps-3">{user.lastName} {user.firstName}</p>
                                        </Col>
                                    </Row>
                                    <Row className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">住所　　　：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <p className="ps-3">{user.address}</p>
                                        </Col>
                                    </Row>
                                    <Row className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">電話番号　：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <span className="ps-3">{user.tel}</span>
                                        </Col>
                                    </Row>     
                                </Col>
                                <Col className="col-2 d-flex align-items-center justify-content-end">
                                    <Button style={btnChangeStyle} onClick={basicInfoRevision}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>メールアドレス</h5>
                            <Row  className="mb-3">
                                <Col className="col-10 mt-2 ps-0">
                                    <Row className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">メールアドレス：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <p className="ps-3">{user.mail}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="col-2 d-flex align-items-center justify-content-end">
                                    <Button style={btnChangeStyle} onClick={mailRevision}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>ユーザーID</h5>
                            <Row  className="mb-3">
                                <Col className="col-10 mt-2 ps-0">
                                    <Row  className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">ユーザーID　：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <p className="ps-3">{user.id}</p> 
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="col-2 d-flex align-items-center justify-content-end">
                                    <Button style={btnChangeStyle} onClick={UserIdRevision}>変更</Button>
                                </Col>
                            </Row>
                            <h5 className="py-2 ps-2" style={AllStyle}>パスワード</h5>
                            <Row  className="mb-3">
                                <Col className="col-10 mt-2 ps-0">
                                    <Row  className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">パスワード 　：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <p className="ps-3">セキュリティ上非表示となっています。</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="col-2 d-flex align-items-center justify-content-end">
                                    <Button style={btnChangeStyle} onClick={passwordRevision}>変更</Button>
                                </Col>
                            </Row>
                        </Col>    
                </Row>
           </Row>
           {order.length !== 0 && 
                <Row className="ms-5" style={boxStyle}>
                    <Row className="my-2 text-center"><h3>購入履歴</h3></Row>
                    <Row className="justify-content-center">
                        <Col className="col-8">
                            <h5 className="py-2 ps-2" style={AllStyle}>{order[0].orderDate}</h5>
                            <Row className="mb-3">
                                <Col className="col-10 mt-2 ps-0">
                                    <Row className="ms-3">
                                        <Col className="col-3 pe-0">
                                            <p className="offset-1">商品名　　：</p>
                                        </Col>
                                        <Col className="col-9 ps-0">
                                            <p className="ps-3">ここに商品が入る</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Row>
           }
        </Container>
        </>
    )
}

export default MyPage;