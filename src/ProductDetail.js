import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';

const ProductDetail = (props) => {

    const stringUrl = 'https://bugknights-b.azurewebsites.net/search/recommend';

    const [quantity, setQuantity] = useState('1');

    const [cookies] = useCookies('');

    const changeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(stringUrl);
                const data = await response.json();
                setMainCards(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchProduct();
    }, []);

    const handleCardClick = (product) => {
        props.setProduct(product);
        props.setMainContentsView(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMouseEnter = (event) => {
        event.currentTarget.style.transform = 'scale(1.05)';
        event.currentTarget.style.transition = 'transform 0.2s ease';
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.transform = 'scale(1)';
    };

    const [MainCards, setMainCards] = useState([]);

    const AllStyle = {
        backgroundColor: "#eaeaea",
    };

    const underlineStyle = {
        borderBottom: '1px solid #ccc',
        paddingBottom: '8px',
        marginBottom: '20px'
    };

    const selectStyle = {
        width: '60px',  // プルダウンの幅を調整
        fontSize: '12px',  // フォントサイズを小さくする
    }

    const addToCart = (item) => {
        if (cookies.loginSession !== undefined && cookies.loginSession !== null) {
            const formData = new FormData();
            formData.append('id', item.id);
            formData.append('quantity', quantity);
            console.log(item.id);
            console.log(quantity);
            fetch('http://localhost:8080/bk/setCart', {
            method: 'POST',
            body: formData,
            credentials: 'include'
            })
            .then(response => response.text())
            .then(data => {
            console.log(data);
            if(data === 'true') {
                item.quantity = quantity;
                console.log(item);
                const appendProduct = props.productCart
                console.log(appendProduct);
                props.setProductCart(appendProduct);
                console.log('カートに登録しました');
                props.setInputKeyword("");
                props.setInputCategoryId("");
                props.setMainContentsView(0);
                props.setUpperPrice(NaN);
                props.setLowerPrice(NaN);
            } else {
                console.log('カートに登録できませんでした');
            }
            })
            .catch(error => console.error(error));
          } else {
            console.log('カートに登録時にエラーが出ました');
          }
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
                    <Col xs={12} md={7} className='py-2'>
                        <Row style={underlineStyle}>
                            {/* 商品名 */}
                            <h3>{props.product.name}</h3>
                        </Row>
                       
                        <Row className='align-items-center'>
                            {/* 価格 */}
                            <Col xs={6} md={7} className='offset-1 mt-1 fs-2'>
                                <div>{props.product.price}円 (税込 {Math.round(props.product.price * 1.1)}円)</div>
                            </Col>
                            <Col md={4} style={{display: 'flex'}}>
                                数量：
                                <select className="ms-3 me-3" style={selectStyle} defaultValue="1" onChange={changeQuantity}>
                                    {[...Array(11).keys()].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                        {/* 商品説明欄 */}
                        <Row className='mt-3'>
                            <Col>
                                <h5>商品説明</h5>
                                {/* 商品概要 */}
                                <p className='ms-3 fs-5'>{props.product.overview}</p>
                                {/* カートボタン */}
                                <Col xs={6} md={4}>
                                    <Button variant='primary' onClick={() => addToCart(props.product)}>カートに入れる</Button>
                                </Col>
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
                <Row className='mt-5' style={AllStyle}>
                    <h3 className="ps-3 py-2">おすすめの商品</h3>
                </Row>
                <Row>
                    {MainCards.map((product) => (
                        <div key={product.id} className='col-2 mt-1'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(product)}>
                            <Card style={{ width: '10rem', height: '15rem' }}>
                                <Card.Img variant='top' src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} style={{ width: '100%', height: '7rem' }} />
                                <Card.Body>
                                    <Card.Text>{product.name}</Card.Text>
                                    <Card.Title style={{fontSize:'20px'}}>{product.price}円</Card.Title>
                                    <Card.Text className='ms-2' style={{fontSize:'15px'}}>(税込 {Math.round(product.price * 1.1)}円)</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default ProductDetail;
