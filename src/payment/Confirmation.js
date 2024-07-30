import { Container, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import './Confirmation.css';

const Confirmation = () => {
    const navigate = useNavigate();
    const handleClickBack = () => navigate("/payment");
    const handleClickCompleted = () => {
        const formData = new FormData();
        formData.append('id', id);
        fetch('http://localhost:8080/insertOrder', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                navigate("/completed");
            })
            .catch(error => console.error(error));    
    }

    const location = useLocation();
    const [address] = useState(location.state.basicData.address);
    const [date] = useState(location.state.basicData.date);
    const [time] = useState(location.state.basicData.time);
    const [method] = useState(location.state.basicData.method);
    const [total] = useState(location.state.basicData.total);
    const [id] = useState(location.state.basicData.id);

    const numberFormat = (num) => {
        return num.toLocaleString();
    };

    const btnStyle = {
        height: '40px',
        width: '100px'
    };

    return (
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
                    <Col className='col-3 pe-0'>
                        <h4>住所　　　：</h4>
                    </Col>
                    <Col className='col-9 ps-0 text'>
                        {address}
                    </Col>
                </Row>
                <Row className="delivery-time-row">
                    <Col className='col-3 pe-0'>
                        <h4>配送日　　：</h4>
                    </Col>
                    <Col className='col-9 ps-0 text'>
                        {date}
                    </Col>
                </Row>
                <Row className="delivery-time-row">
                    <Col className='col-3 pe-0'>
                        <h4>時間帯　　：</h4>
                    </Col>
                    <Col className='col-9 ps-0 text'>
                        {time}
                    </Col>
                </Row>
                <Row className="payment-method-row">
                    <Col className='col-3 pe-0'>
                        <h4>支払い方法：</h4>
                    </Col>
                    <Col className='col-9 ps-0 text'>
                        {method}
                    </Col>
                </Row>
                <Row className="address-row">
                    <Col className='col-3 pe-0'>
                        <h4>金額　　　：</h4>
                    </Col>
                    <Col className='col-9 ps-0 text'>
                        {numberFormat(total)}円（税込 {numberFormat(Math.round(total * 1.1))}円)
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Button className="ms-3 my-2" onClick={handleClickCompleted} style={btnStyle}>購入する</Button>
                </Row>
            </Container>
        </>
    );
};

export default Confirmation;
