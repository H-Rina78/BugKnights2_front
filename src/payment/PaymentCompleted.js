import {Button} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import { Container, Row, Col } from 'react-bootstrap';

const PaymentCompleted = () =>{

    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    return(
        <>
            <SimpleHeader />
            <Container>
                <Row>
                    <Col className="h1 text-center col-12">
                        決済完了
                    </Col>
                    <Col className="fs-4 text-center col-12 my-3">
                        <p>ご利用ありがとうございました。</p>
                        <p>またのご利用お待ちしております。</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Button className="ms-3 my-2" onClick={handleClick} style={btnStyle}>TOPへ戻る</Button>
                </Row>
            </Container>
        </>
    )
}

export default PaymentCompleted;