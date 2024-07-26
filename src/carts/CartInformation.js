import { useNavigate } from "react-router-dom";
import SimpleHeader from "../SimpleHeader";
import { Col, Container, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CartInformation = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [defaultProducts, setDefaultProducts] = useState([]);
    const [cookies] = useCookies('');

    const handleClick = () => navigate("/");
    const handleClickPayment = () => navigate("/payment");

    useEffect(() => {
        if (cookies.loginSession !== undefined && cookies.loginSession !== null) {
            fetch('http://localhost:8080/bk/getCart', {
              method: 'GET',
              credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
              setProducts(data);
              setDefaultProducts(data);
              console.log('カート情報取得');
            })
            .catch(error => console.error(error));
              console.log("エラー");
          } else {
            setProducts([]);
          }
    }, [cookies.loginSession, setProducts]);

    const totalQuantity = () => {
        let totalQuantity = 0;
        if(Array.isArray(products)) {
            products.forEach((product) => {
                totalQuantity += product.quantity;
            })
        }
        return totalQuantity;
    }

    const handleClickChangeSave = () => {
        if (cookies.loginSession !== undefined && cookies.loginSession !== null) {
            const formData = new FormData();
            const stringProducts = JSON.stringify(products);
            formData.append('products', stringProducts);
            fetch('http://localhost:8080/bk/changeCart', {
              method: 'POST',
              body: formData,
              credentials: 'include'
            })
            .then(response => response.text())
            .then(data => {
              console.log(data);
              navigate('/');
            })
            .catch(error => console.error(error));
              console.log("エラー");
          } else {
            setProducts([]);
          }
    }

    const handleClickRemove = (id) => {
        const removedProducts = products.filter((product) => product.id !== id);
        setProducts(removedProducts);
        console.log('商品をカートから削除しました');
    }

    const changeQuantity = (event) => {
        const results = event.target.value.split(',');
        if(Array.isArray(products)) {
            const productList = products.map((product) => {
                if(product.id === results[0]) {
                    product.quantity = parseInt(results[1], 10);
                    return product;
                } else {
                    return product;
                }
            });
            setProducts(productList);
        }
    }

    const [productTotal, setProductTotal] = useState([]);
    useEffect( () => {
        let total = 0;
        if(Array.isArray(products)) {
            products.forEach((product) => {
                total += product.price * product.quantity;
            });
        }
        setProductTotal(total);
    },[setProductTotal,products]);

    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponent(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

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

    const saveBtnStyle = {
        hight:'20px',
        width:'150px'
    }

    const deleteBtnStyle = {
        width:'100px',
        height:'30px',
        fontSize:'13px'
    }

    const selectStyle = {
        width: '70px',  // プルダウンの幅を調整
        fontSize: '12px',  // フォントサイズを小さくする
    }

    const numberFormat = (num) => {
        return num.toLocaleString();
    };

    return (
        <>
        <SimpleHeader />
        <Container fluid className='px-5 py-3' style={style}>
        <Button className="ms-3 mb-3" onClick={handleClick} style={btnStyle}>戻る</Button>
        {products !== defaultProducts && showComponent && <Button className="ms-3 mb-3" style={saveBtnStyle} onClick={handleClickChangeSave}>変更を保存する</Button>}
            <Row className="justify-content-center py-3 px-5"  style={style2}>
                <Row style={underlineStyle} className="d-flex align-items-center justify-content-center">
                    <Col className="col-9"><h1>カート</h1></Col>
                    <Col className="h5 col-3">カートに入っている商品：{totalQuantity()}点</Col>
                </Row>
                {Array.isArray(products) && products.map((product) => (
                    <Row key={product.id} className="p-2 mt-3" style={underlineStyle}>
                        <Col className="col-5 text-center">
                            <img style={{ width: '15rem', height: '10rem' }} src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} alt='advertisement' />
                        </Col>
                        <Col className="col-3">
                            <Row className="pb-5"><p style={name}>{product.name}</p></Row>
                            <Row style={{display: 'flex'}}>
                                数量変更：
                                <Form.Select className="ms-3 me-3" style={selectStyle} defaultValue={product.quantity} onChange={changeQuantity}>
                                    {[...Array(10).keys()].map((num) => (
                                        <option key={num} value={product.id + ',' + (num + 1)}>{num + 1}</option>
                                    ))}
                                </Form.Select>
                            </Row>
                        </Col>
                        <Col className="col-3 offset-end-1">
                            <Row className="pb-4 text-center" style={underlineStyle}><span style={price}>{numberFormat(product.price)}円(税込 {Math.round(product.price * 1.1)}円)　×　{product.quantity}</span></Row>
                            <Row className="text-center"><span style={price}>合計：{numberFormat(product.price * product.quantity)}円(税込 {numberFormat(Math.round((product.price * product.quantity) * 1.1))}円)</span></Row>
                            <Row className="pt-5 justify-content-end"><Button variant='primary' style={deleteBtnStyle} onClick={() => handleClickRemove(product.id)}>削除</Button></Row>
                        </Col>
                    </Row>
                ))}
                <Row className="justify-content-end fs-3">
                    小計：{numberFormat(productTotal)}円(税込 {numberFormat(Math.round((productTotal) * 1.1))}円)
                </Row>
            </Row>
            <Row className="justify-content-end fs-3"><Button variant='primary' style={deleteBtnStyle} className="d-flex align-items-center justify-content-center" onClick={handleClickPayment}>レジへ進む</Button></Row>
        </Container>
        </>
    );
}

export default CartInformation;
