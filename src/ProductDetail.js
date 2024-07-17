import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetail = (props) => {
    const underlineStyle = {
        borderBottom: '1px solid #ccc',
        paddingBottom: '8px',  // 下線とテキストの間隔を調整するために必要な場合があります
        marginBottom: '20px'   // 下線の下の余白を調整するために必要な場合があります
    };

    return (
        <>
            <Container fluid>
                <Row>
                    {/* 画像部分 */}
                    <Col xs={12} md={5} className='px-2'>
                        <img className='w-100' src={`https://bugknights.blob.core.windows.net/products/${props.product.imageName}`} alt='Product'></img>
                    </Col>
                    {/* 商品詳細部分 */}
                    <Col xs={12} md={7} className='py-3'>
                        <Row style={underlineStyle}>
                            {/* 商品名 */}
                            <h1>{props.product.name}</h1>
                        </Row>
                       
                        <Row className='align-items-center'>
                            {/* 価格 */}
                            <Col xs={6} md={7} className='offset-1 mt-2 fs-2'>
                                <div>{props.product.price}円 (税込 {Math.round(props.product.price * 1.1)}円)</div>
                            </Col>
                            {/* カートボタン */}
                            <Col xs={6} md={4}>
                                <Button variant='primary'>カートに入れる</Button>
                            </Col>
                        </Row>
                        {/* 商品説明欄 */}
                        <Row className='mt-5'>
                            <Col>
                                <h5>商品説明</h5>
                                <p>
                                <Row>
                                    {/* 商品概要 */}
                                    <p className='ms-3 fs-5'>{props.product.overview}</p>
                                </Row>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* 備考 */}
                <Row className='small'>
                    <Col>
                        <p>
                            ※写真はイメージです。<br />
                            予告なくパッケージ、商品名、産地等が変更になる場合がございます。予めご了承ください。<br />
                            （実際にお届けする商品と掲載内容が異なる場合がございます）
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductDetail;
