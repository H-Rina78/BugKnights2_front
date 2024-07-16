import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecomendTop = () =>{
    const RecomendTopStyle = {
        backgroundColor:'#eaeaea'
    }
    return(
        <Container fluid>
            <Row>
                <h1>おすすめの商品</h1>
            </Row>
        </Container>
    )
}

export default RecomendTop;