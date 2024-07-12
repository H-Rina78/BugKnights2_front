import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MainTop = (props) => {
    const stringUrl = 'http://localhost:8080/search';
        
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
    }, []);

        return (
            <>
                <div className='row'>
                    {MainCards.map((product) => (
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
                    ))}
                </div>
                <div className='detail-modal'></div>
            </>
        );
}

export default MainTop