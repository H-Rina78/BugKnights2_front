import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SimpleHeader = () =>{
    const headerStyle = {
      fontSize: 24,
      padding: 16,
      marginTop: 0,
      marginBottom: 10,
      color: 'rgb(18, 122, 216)',
      borderBottom: 'solid',
    }

    return(
      <Container fluid  style={headerStyle}>
        <Row >
          <Col className="h4">
            Aceネットスーパー
          </Col>
        </Row>
      </Container>
    );
   }
   export default SimpleHeader;

   