import { useNavigate } from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

const CartInformation = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const style = {
        backgroundColor:'#eaeaea'
    }

    const style2 = {
        backgroundColor:'#ffffff'
    }

    return (
        <>
        <SimpleHeader />
        <Container fluid className='p-5' style={style}>
            <Row className="justify-content-center py-3 px-5"  style={style2}>
                <Row>
                <h1>カート</h1>
                </Row>
                <Row className="p-2 mt-3">
                    <Col className="text-center">
                        <img style={{ width: '15rem', height: '15rem' }} src='https://bugknights.blob.core.windows.net/products/田中太郎.jfif' alt='advertisement' />
                    </Col>
                    <Col>
                        <Row>商品名</Row>
                        <Row>金額</Row>
                        <Row>商品名</Row>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <img style={{ width: '15rem', height: '15rem' }} src='https://bugknights.blob.core.windows.net/products/田中太郎.jfif' alt='advertisement' />
                    </Col>
                    <Col>
                        <Row>商品名</Row>
                        <Row>金額</Row>
                        <Row>商品名</Row>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <img style={{ width: '15rem', height: '15rem' }} src='https://bugknights.blob.core.windows.net/products/田中太郎.jfif' alt='advertisement' />
                    </Col>
                    <Col>
                        <Row>商品名</Row>
                        <Row>金額</Row>
                        <Row>商品名</Row>
                    </Col>
                </Row>
            </Row>
        </Container>
        <button onClick={handleClick}>トップ</button>
        </>
    );
}

export default CartInformation;