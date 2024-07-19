import { useNavigate } from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import { Col, Container, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const CartInformation = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const products = JSON.parse(localStorage.getItem('cart')) || [];

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
        hight:'20px',
        width:'100px'
    }

    const deleteBtnStyle = {
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
        <Container fluid className='px-5 py-3' style={style}>
        <Button className="ms-3 mb-3" onClick={handleClick} style={btnStyle}>戻る</Button>
            <Row className="justify-content-center py-3 px-5"  style={style2}>
                <Row style={underlineStyle} className="d-flex align-items-center justify-content-center">
                    <Col className="col-9"><h1>カート</h1></Col>
                    <Col className="h5 col-3">カートに入っている商品：{products.length}</Col>
                </Row>
                {products.map((product) => (
                    <Row className="p-2 mt-3" style={underlineStyle}>
                        <Col className="col-5 text-center">
                            <img style={{ width: '15rem', height: '10rem' }} src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} alt='advertisement' />
                        </Col>
                        <Col className="col-3">
                            <Row className="pb-5"><p style={name}>{product.name}</p></Row>
                            <Row style={{display: 'flex'}}>
                                数量：
                                <Form.Select className="ms-3 me-3" style={selectStyle} defaultValue="1">
                                    {[...Array(11).keys()].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </Form.Select>
                            </Row>
                        </Col>
                        <Col className="col-3 offset-end-1">
                            <Row className="pb-4 text-center" style={underlineStyle}><span style={price}>{product.price}(税込 {Math.round(product.price * 1.1)}円)　　×　3</span></Row>
                            <Row className="text-center"><span style={price}>合計：900円(税込 990円)</span></Row>
                            <Row className="pt-5 justify-content-end"><Button variant='primary' style={deleteBtnStyle}>削除</Button></Row>
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
        </>
    );
}

export default CartInformation;
