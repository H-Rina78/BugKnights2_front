import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import './Payment.css'; // CSSファイルをインポート
import {Button} from "react-bootstrap";
import { useNavigate} from "react-router-dom";

const Payment = () => {

    const navigate = useNavigate();
    const handleClick = () => navigate("/cart");
    const handleClickCompleted = () => navigate("/completed");

    // 選択された支払い方法を管理するための状態
    const [selectedMethod, setSelectedMethod] = useState('creditCard');

    // 配送日時の状態
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');

    // ラジオボタンの選択変更を処理する関数
    const handleChange = (event) => {
        setSelectedMethod(event.target.value);
    };

    // 配送日時の変更を処理する関数
    const handleDateChange = (event) => {
        setDeliveryDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setDeliveryTime(event.target.value);
    };

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    return (
        <>
            <SimpleHeader />
            <Button className="ms-3 my-2" onClick={handleClick} style={btnStyle}>戻る</Button>
            <Container className="payment-container">
                <Row className="header-row">
                    <Col>
                        <h1>決済</h1>
                    </Col>        
                </Row>
                <Row className="address-row">
                    <Col>
                        <h2>住所選択</h2>
                        {/* 住所選択の入力フィールドをここに追加できます */}
                    </Col>
                </Row>
                <Row className="delivery-time-row">
                    <Col>
                        <h2>配送日時を選択してください:</h2>
                        <div className="form-group">
                            <label htmlFor="deliveryDate">日付:</label>
                            <input
                                type="date"
                                id="deliveryDate"
                                value={deliveryDate}
                                onChange={handleDateChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryTime">時間帯:</label>
                            <select
                                id="deliveryTime"
                                value={deliveryTime}
                                onChange={handleTimeChange}
                                className="form-control"
                            >
                                <option value="">選択してください</option>
                                <option value="08:00-12:00">08:00から12:00</option>
                                <option value="12:00-14:00">12:00から14:00</option>
                                <option value="14:00-16:00">14:00から16:00</option>
                                <option value="16:00-18:00">16:00から18:00</option>
                                <option value="18:00-20:00">18:00から20:00</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row className="payment-method-row">
                    <Col>
                        <div>
                            <h2>お支払い方法を選択してください:</h2>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="creditCard"
                                    checked={selectedMethod === 'creditCard'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="creditCard" className="form-check-label">クレジットカード</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="convenienceStore"
                                    name="paymentMethod"
                                    value="convenienceStore"
                                    checked={selectedMethod === 'convenienceStore'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="convenienceStore" className="form-check-label">コンビニ払い</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="cashOnDelivery"
                                    name="paymentMethod"
                                    value="cashOnDelivery"
                                    checked={selectedMethod === 'cashOnDelivery'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="cashOnDelivery" className="form-check-label">代引き</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="mobilePayment"
                                    name="paymentMethod"
                                    value="mobilePayment"
                                    checked={selectedMethod === 'mobilePayment'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="mobilePayment" className="form-check-label">スマホ決済</label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-end'><Button className="ms-3 my-2" onClick={handleClickCompleted} style={btnStyle}>確認画面</Button></Row>
            </Container>

        </>
    );
};

export default Payment;
