import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SearchProducts = (props) => {
    let stringUrl;

    if(props.inputCategoryId !== "") {
        if(!Number.isNaN(props.upperPrice) && !Number.isNaN(props.lowerPrice)) {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/categoryP?category_id=${props.inputCategoryId}&upper_price=${props.upperPrice}&lower_price=${props.lowerPrice}`;
        } else {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/category?category_id=${props.inputCategoryId}`;
        }
    } else if(props.inputKeyword !== "") {
        if(!Number.isNaN(props.upperPrice) && !Number.isNaN(props.lowerPrice)) {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/keywordP?keyword=${props.inputKeyword}&upper_price=${props.upperPrice}&lower_price=${props.lowerPrice}`;
        } else {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/keyword?keyword=${props.inputKeyword}`;
        }
    }
        
    const [MainCards, setMainCards] = useState([]);

    const handleClick = (event) => {
        const selectProduct = MainCards.filter((product) =>  
            product.id === event.target.value
        )
        props.setProduct(selectProduct[0]);
        props.setMainContentsView(2);
    }

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

        return (
            <>
                <div className='row'>
                    {MainCards.length === 0 ? 
                        <h2>ご指定の条件に一致する商品は見つかりませんでした。</h2>
                      : MainCards.map((product) => (
                            <div className='col-3 my-2'>
                                <Card style={{ width: '15rem' ,height: '25rem'}}>
                                    <Card.Img variant='top' src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} style={{width: '100%', height: '10rem'}} />
                                    <Card.Body>
                                        <Card.Text>{product.name}</Card.Text>
                                        <Card.Text>{product.overview}</Card.Text>
                                        <Card.Title>{product.price}円</Card.Title>
                                        <Card.Text>
                                        (税込 {product.price * 11 / 10}円)
                                        </Card.Text>
                                        <Button variant='primary' value={product.id} onClick={handleClick}>詳細を見る</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className='detail-modal'></div>
            </>
        );
}

export default SearchProducts