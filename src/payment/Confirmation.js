import { Container, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './Confirmation.css';

const Confirmation = () =>{

    const navigate = useNavigate();
    const handleClickBack = () => navigate("/payment");
    const handleClickCompleted = () => navigate("/completed");

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    return(
        <>
        <SimpleHeader />
        <Button className="ms-3 my-2" onClick={handleClickBack} style={btnStyle}>戻る</Button>
        <Container className="Confirmation-container">
        <Row className="header-row">
                    <Col>
                        <h2>確認画面</h2>
                    </Col>     
                </Row>
                <Row className="address-row">
                    <Col className='col-8'>
                        <h4>住所：</h4>
                    </Col>
                </Row>
                <Row className="delivery-time-row">
                    <Col>
                        <h4>配送日時選択：</h4>
                        <h4>時間帯：</h4>
                    </Col>
                </Row>
                <Row className="payment-method-row">
                    <Col>
                        <h4>お支払い方法選択：</h4>
                    </Col>
                </Row>
                <Row className="address-row">
                    <Col>
                        <h4>金額：</h4>
                        <span></span>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Button className="ms-3 my-2" onClick={handleClickCompleted} style={btnStyle}>購入する</Button>
                </Row>
        </Container>
        </>
    )
}

export default Confirmation;