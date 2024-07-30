import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainTop = (props) => {
    const stringUrl = 'https://bugknights-b.azurewebsites.net/search';
    const itemsPerPage = 8; // 1ページあたりの商品数

    const [MainCards, setMainCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    // 現在のページに表示する商品リストを計算する
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = MainCards.slice(indexOfFirstItem, indexOfLastItem);

    // ページネーションのボタンがクリックされたときの処理
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // ページ数のボタンを生成する
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(MainCards.length / itemsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
                {i}
            </Pagination.Item>
        );
    }

    const numberFormat = (num) => {
        return num.toLocaleString();
    };

    return (
        <Container fluid>
            <Row>
                {currentItems.map((product) => (
                    <Col key={product.id} xs={12} md={3} className='my-2'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick(product)}>
                        <Card style={{ width: '15rem', height: '22rem' }}>
                            <Card.Img variant='top' src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} style={{ width: '100%', height: '10rem' }} />
                            <Card.Body>
                                <Card.Text>{product.name}</Card.Text>
                                <Card.Text>{product.overview}</Card.Text>
                                <div style={{ display: 'flex' }}>
                                    <Card.Title>{numberFormat(product.price)}円</Card.Title>
                                    <Card.Text className='ms-2'>(税込 {numberFormat(Math.round(product.price * 1.1))}円)</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* ページネーションUI */}
            <Row className='mt-4'>
                <Col className='d-flex justify-content-center'>
                    <Pagination>
                        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                        {pageNumbers}
                        <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= MainCards.length} />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default MainTop;
