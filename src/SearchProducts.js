import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const SearchProducts = (props) => {
    let stringUrl;

    if (props.inputCategoryId !== "") {
        if (!Number.isNaN(props.upperPrice) && !Number.isNaN(props.lowerPrice)) {
            stringUrl = `http://localhost:8080/search/categoryP?category_id=${props.inputCategoryId}&upper_price=${props.upperPrice}&lower_price=${props.lowerPrice}`;
        } else {
            stringUrl = `http://localhost:8080/search/category?category_id=${props.inputCategoryId}`;
        }
    } else if (props.inputKeyword !== "") {
        if (!Number.isNaN(props.upperPrice) && !Number.isNaN(props.lowerPrice)) {
            stringUrl = `http://localhost:8080/search/keywordP?keyword=${props.inputKeyword}&upper_price=${props.upperPrice}&lower_price=${props.lowerPrice}`;
        } else {
            stringUrl = `http://localhost:8080/search/keyword?keyword=${props.inputKeyword}`;
        }
    }

    const [MainCards, setMainCards] = useState([]);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchProduct = () => {
            fetch(stringUrl)
                .then(response => response.json())
                .then(data => {
                    setMainCards(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        fetchProduct();
    }, [stringUrl]);

    const handleCardClick = (product) => {
        props.setProduct(product);
        props.setMainContentsView(2);
    }

    const handleMouseEnter = (event) => {
        event.currentTarget.style.transform = 'scale(1.05)';
        event.currentTarget.style.transition = 'transform 0.2s ease';
    }

    const handleMouseLeave = (event) => {
        event.currentTarget.style.transform = 'scale(1)';
    }

    return (
        <>
            <div className='row'>
                {MainCards.map((product) => (
                    <div key={product.id} className='col-3 my-2'
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                         onClick={() => handleCardClick(product)}>
                        <Card style={{ width: '15rem', height: '22rem' }}>
                            <Card.Img variant='top' src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} style={{ width: '100%', height: '10rem' }} />
                            <Card.Body>
                                <Card.Text>{product.name}</Card.Text>
                                <Card.Text>{product.overview}</Card.Text>
                                <div style={{display:'flex'}}>
                                <Card.Title>{product.price}円</Card.Title>
                                <Card.Text className='ms-2'>(税込 {Math.round(product.price * 1.1)}円)</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                {MainCards.length === 0 && showComponent &&
                    <h2>ご指定の条件に一致する商品は見つかりませんでした。</h2>}
            </div>
            <div className='detail-modal'></div>
        </>
    );
}

export default SearchProducts;
