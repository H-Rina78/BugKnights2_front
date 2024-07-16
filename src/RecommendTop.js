import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const RecommendTop = () =>{
    const RecommendTopStyle = {
        backgroundColor:'#eaeaea'
    }
    return(
        <Container fluid>
            <Row style={RecommendTopStyle}>
                <h1>おすすめの商品</h1>
            </Row>
        </Container>
    )
}

export default RecommendTop;