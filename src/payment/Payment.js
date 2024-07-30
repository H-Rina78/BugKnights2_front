import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import SimpleHeader from '../SimpleHeader';
import './Payment.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState({});
    const [addressEditable, setAddressEditable] = useState(false);
    const [address, setAddress] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('クレジットカード'); // 初期値を設定
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [errors, setErrors] = useState({});
    const [productTotal, setProductTotal] = useState(0); // 小計を状態として管理

    useEffect(() => {
        // 小計をlocation.stateから取得
        if (location.state && location.state.productTotal) {
            setProductTotal(location.state.productTotal);
        }

        fetch('http://localhost:8080/bk/getUserCookie', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.text())
        .then(data => {
            if (data !== '') {
                setUser(JSON.parse(data));
                setAddress(JSON.parse(data).address || ''); // user.address を初期値として設定
            }
        })
        .catch(error => {
            console.error(error);
        });
    }, [location.state]);

    const handleClick = () => navigate("/cart");

    const toggleAddressEdit = () => {
        if (addressEditable) {
            setAddress(user.address || '');
        }
        setAddressEditable(!addressEditable);
    };

    const handleChange = (event) => {
        setSelectedMethod(event.target.value);
        // エラーメッセージの削除
        setErrors(prevErrors => ({ ...prevErrors, paymentMethod: '' }));
    };

    const handleDateChange = (event) => {
        setDeliveryDate(event.target.value);
        // エラーメッセージの削除
        setErrors(prevErrors => ({ ...prevErrors, deliveryDate: '' }));
    };

    const handleTimeChange = (event) => {
        setDeliveryTime(event.target.value);
        // エラーメッセージの削除
        setErrors(prevErrors => ({ ...prevErrors, deliveryTime: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (addressEditable && !address) {
            newErrors.address = '住所を入力してください';
        }

        if (!deliveryDate) {
            newErrors.deliveryDate = '配送日付を選択してください';
        }

        if (!deliveryTime) {
            newErrors.deliveryTime = '配送時間帯を選択してください';
        }

        if (!selectedMethod) {
            newErrors.paymentMethod = 'お支払い方法を選択してください';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleClickConfirmation = () => {
        if (validateForm()) {
            navigate("/confirmation", {
                state: {
                    basicData: {
                        address: address,
                        date: deliveryDate,
                        time: deliveryTime,
                        method: selectedMethod,
                        total: productTotal // 小計も一緒に渡す
                    }
                }
            });
        }
    };

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
            <Button className="ms-3 my-2" onClick={handleClick} style={btnStyle}>戻る</Button>
            <Container className="payment-container">
                <Row className="header-row">
                    <Col>
                        <h2>決済</h2>
                    </Col>     
                </Row>
                <Row className="address-row">
                    <Col className='col-8'>
                        <h4>住所選択：</h4>
                    </Col>
                    <Col className='col-4 text-end'>
                        <Button className="ms-3 my-2" onClick={toggleAddressEdit} style={btnStyle}>
                            {addressEditable ? 'キャンセル' : '変更する'}
                        </Button>
                    </Col> 
                    <Col className='col-12'>
                        <Form.Control
                            type="text"
                            value={address}
                            placeholder={"住所を入力"}
                            aria-label="住所入力"
                            disabled={!addressEditable}
                            onChange={(e) => {
                                setAddress(e.target.value);
                                // エラーメッセージの削除
                                if (addressEditable) {
                                    setErrors(prevErrors => ({ ...prevErrors, address: '' }));
                                }
                            }}
                            required={addressEditable}
                        />
                        {errors.address && <div className="text-danger">{errors.address}</div>}
                    </Col>  
                </Row>
                <Row className="delivery-time-row">
                    <Col>
                        <h4>配送日時選択：</h4>
                        <div className="form-group">
                            <label htmlFor="deliveryDate">日付：</label>
                            <input
                                type="date"
                                id="deliveryDate"
                                value={deliveryDate}
                                onChange={handleDateChange}
                                className="form-control"
                                required
                            />
                            {errors.deliveryDate && <div className="text-danger">{errors.deliveryDate}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryTime">時間帯：</label>
                            <select
                                id="deliveryTime"
                                value={deliveryTime}
                                onChange={handleTimeChange}
                                className="form-control"
                                required
                            >
                                <option value="">選択してください</option>
                                <option value="08:00-12:00">8:00～12:00</option>
                                <option value="12:00-14:00">12:00～14:00</option>
                                <option value="14:00-16:00">14:00～16:00</option>
                                <option value="16:00-18:00">16:00～18:00</option>
                                <option value="18:00-20:00">18:00～20:00</option>
                            </select>
                            {errors.deliveryTime && <div className="text-danger">{errors.deliveryTime}</div>}
                        </div>
                    </Col>
                </Row>
                <Row className="payment-method-row">
                    <Col>
                        <div>
                            <h4>お支払い方法選択：</h4>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="クレジットカード"
                                    checked={selectedMethod === 'クレジットカード'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    required
                                />
                                <label htmlFor="creditCard" className="form-check-label">クレジットカード</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="convenienceStore"
                                    name="paymentMethod"
                                    value="コンビニ払い"
                                    checked={selectedMethod === 'コンビニ払い'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    required
                                />
                                <label htmlFor="convenienceStore" className="form-check-label">コンビニ払い</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="cashOnDelivery"
                                    name="paymentMethod"
                                    value="代引き"
                                    checked={selectedMethod === '代引き'}
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
                                    value="スマホ決済"
                                    checked={selectedMethod === 'スマホ決済'}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="mobilePayment" className="form-check-label">スマホ決済</label>
                            </div>
                            {errors.paymentMethod && <div className="text-danger">{errors.paymentMethod}</div>}
                        </div>
                    </Col>
                </Row>

                <Row className="address-row">
                    <Col>
                        <h4>金額：</h4>
                        <span>小計: {numberFormat(productTotal)}円（税込 {numberFormat(Math.round(productTotal * 1.1))}円)</span>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Button className="ms-3 my-2" onClick={handleClickConfirmation} style={btnStyle}>確認画面</Button>
                </Row>
            </Container>
        </>
    );
};

export default Payment;
