import { useNavigate } from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import { Col, Container, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const CartInformation = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const style = {
        backgroundColor:'#eaeaea'
    }

    const style2 = {
        backgroundColor:'#ffffff'
    }

    const underlineStyle = {
        borderBottom: '1px solid #ccc',
        paddingBottom: '8px',
        marginBottom: '20px'
    }

    const name = {
        fontSize: '30px'
    }

    const price = {
        fontSize: '20px'
    }

    const btnStyle = {
        width:'100px',
        height:'30px',
        fontSize:'13px'
    }

    const selectStyle = {
        width: '60px',  // プルダウンの幅を調整
        fontSize: '12px',  // フォントサイズを小さくする
    }

    return (
        <>
        <SimpleHeader />
        <Container fluid className='p-5' style={style}>
            <Row className="justify-content-center py-3 px-5"  style={style2}>
                <Row style={underlineStyle} className="d-flex align-items-center justify-content-center">
                    <Col className="col-9"><h1>カート</h1></Col>
                    <Col className="h5 col-3">カートに入っている商品：14点</Col>
                </Row>
                <Row className="p-2 mt-3" style={underlineStyle}>
                    <Col className="col-5 text-center">
                        <img style={{ width: '15rem', height: '10rem' }} src='https://bugknights.blob.core.windows.net/products/tomato.jpg' alt='advertisement' />
                    </Col>
                    <Col className="col-3">
                        <Row className="pb-5"><p style={name}>トマト</p></Row>
                        <Row style={{display: 'flex'}}>
                            数量：
                            <Form.Select className="ms-3 me-3" style={selectStyle} defaultValue="1">
                                {[...Array(11).keys()].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Row>
                    </Col>
                    <Col className="col-4">
                        <Row className="pb-4 text-center" style={underlineStyle}><span style={price}>300円(税込 330円)　　×　3</span></Row>
                        <Row className="text-center"><span style={price}>合計：900円(税込 990円)</span></Row>
                        <Row className="pt-5 justify-content-end"><Button variant='primary' style={btnStyle}>削除</Button></Row>
                    </Col>
                </Row>
                <Row className="p-2 mt-3" style={underlineStyle}>
                    <Col className="col-5 text-center">
                        <img style={{ width: '15rem', height: '10rem' }} src='https://bugknights.blob.core.windows.net/products/gyutan.jpg' alt='advertisement' />
                    </Col>
                    <Col className="col-3">
                        <Row className="pb-5"><p style={name}>牛タン</p></Row>
                        <Row style={{display: 'flex'}}>
                            数量：
                            <Form.Select className="ms-3 me-3" style={selectStyle} defaultValue="1">
                                {[...Array(11).keys()].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Row>
                    </Col>
                    <Col className="col-4">
                        <Row className="pb-4 text-center" style={underlineStyle}><span style={price}>1800円(税込 1980円)　　×　1</span></Row>
                        <Row className="text-center"><span style={price}>合計：1800円(税込 1980円)</span></Row>
                        <Row className="pt-5 justify-content-end"><Button variant='primary' style={btnStyle}>削除</Button></Row>
                    </Col>
                </Row>
                <Row className="p-2 mt-3" style={underlineStyle}>
                    <Col className="col-5 text-center">
                        <img style={{ width: '15rem', height: '10rem' }} src='https://bugknights.blob.core.windows.net/products/macaron.jpg' alt='advertisement' />
                    </Col>
                    <Col className="col-3">
                        <Row className="pb-5"><p style={name}>マカロン</p></Row>
                        <Row style={{display: 'flex'}}>
                            数量：
                            <Form.Select className="ms-3 me-3" style={selectStyle} defaultValue="1">
                                {[...Array(11).keys()].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Row>
                    </Col>
                    <Col className="col-4">
                        <Row className="pb-4 text-center" style={underlineStyle}><span style={price}>450円(税込 495円)　　×　10</span></Row>
                        <Row className="text-center"><span style={price}>合計：4500円(税込 4950円)</span></Row>
                        <Row className="pt-5 justify-content-end"><Button variant='primary' style={btnStyle}>削除</Button></Row>
                    </Col>
                </Row>
                <Row className="p-2 mb-3 text-end" style={{}}>
                    <span style={price}><strong>合計金額：7200円(税込 7920円)</strong></span>
                </Row>
            </Row>
        </Container>
        <Button variant='primary' onClick={handleClick}>トップ</Button>
        </>
    );
}

export default CartInformation;
