import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetail = (props) => {
    console.log(props.product.id);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='col-4 px-0'>
                        <img className='w-100' src={`https://bugknights.blob.core.windows.net/products/${props.product.imageName}`} alt='jagaimo'></img>
                    </Col>
                    <Col>
                        <Row className='h1'>
                            <span>{props.product.name}</span>
                        </Row>
                        <Row className='fs-4'>
                            <span>{props.product.overview}</span>
                        </Row>
                        <Row className='fs-2'>
                            <Col className='col-2'>
                                <div>{props.product.price}円</div>
                            </Col>
                            <Col className='col-10 fs-3'>
                                <div>(税込 {props.product.price * 11 / 10})円</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

  export default ProductDetail;