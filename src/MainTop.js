import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const MainTop = (props) => {
    const stringUrl = 'https://bugknights-b.azurewebsites.net/search/recommend';
        
    const [MainCards, setMainCards] = useState([]);

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
        <div className='row'>
            {MainCards.map((product) => (
                <div key={product.id} className='col-3 my-2' 
                     onMouseEnter={handleMouseEnter} 
                     onMouseLeave={handleMouseLeave}
                     onClick={() => handleCardClick(product)}>
                    <Card style={{ width: '15rem', height: '25rem' }}>
                        <Card.Img variant='top' src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} style={{ width: '100%', height: '10rem' }} />
                        <Card.Body>
                            <Card.Text>{product.name}</Card.Text>
                            <Card.Text>{product.overview}</Card.Text>
                            <Card.Title>{product.price}円</Card.Title>
                            <Card.Text>
                                (税込 {Math.ceil(product.price * 11 / 10)}円)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default MainTop;
