import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sideArea.css';
import Carousel from 'react-bootstrap/Carousel';

const SideArea = (props) => {
    //サイドエリアのどのボタンを押したかの情報を切り替え
    //1～5で情報を設定
    const changeCategory = (event) => {
        props.setInputCategoryId(event.target.value);
        props.setMainContentsView(1);
        props.setInputKeyword("");
        props.setUpperPrice(NaN);
        props.setLowerPrice(NaN);
    }
    
    const testStyle = {
        borderBottom: 'solid',
        color: "blue",
    }

    const testStyle2 = {
        color: 'green'
    }

    const advertisement = {
        backgroundColor:'#4169e1',
        color:'#ffffff'
    }
    const advertisement2 = {
        border: "solid 2px #afeeee",
        borderRadius: "5px",
        padding: "8px",
        margin: "8px"
    }

    const slides = [
        {
          id: 1,
          imageUrl: 'https://bugknights.blob.core.windows.net/products/田中太郎.jfif',
          caption: 'Slide 1',
        },
        {
          id: 2,
          imageUrl: 'https://bugknights.blob.core.windows.net/products/佐藤花子.jfif',
          caption: 'Slide 2',
        },
        {
          id: 3,
          imageUrl: 'https://bugknights.blob.core.windows.net/products/鈴木一郎.jfif',
          caption: 'Slide 3',
        },
        {
          id: 4,
          imageUrl: 'https://bugknights.blob.core.windows.net/products/高橋美咲.jfif',
          caption: 'Slide 4',
        },
        {
          id: 5,
          imageUrl: 'https://bugknights.blob.core.windows.net/products/中村健太.jfif',
          caption: 'Slide 5',
        },
      ];
    

    return(
        <>
            <Container>
                <Row>
                    <Col className="category col-12 ms-4 h4 border-start border-5">
                        おすすめの商品
                    </Col>
                </Row>
                <Row>
                    <Col className="category col-12 ms-4 h4 border-start border-5">
                        カテゴリ
                    </Col>
                </Row>
                <Row>
                    
                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 1 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={1}>
                            野菜
                        </button>
                    </Col>
                    
                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 2 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={2}>
                            お肉
                        </button>
                    </Col>
                    
                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 3 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={3}>
                            魚介
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 4 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={4}>
                            スイーツ
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 5 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={5}>
                            飲み物
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 6 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={6}>
                            果物
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5" style={Number(props.inputCategoryId) === 7 ? testStyle : testStyle2}>
                        <button onClick={changeCategory} value={7}>
                            惣菜
                        </button>
                    </Col>
                </Row>
                <Row className='row px-1 mt-4 justify-content-center' style={advertisement}>
                    <Row className='text-center' style={advertisement2}>
                            <h5>相談予約受付中</h5>
                    </Row>
                    <Carousel>
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.id}>
                            <a href='https://reservebugnights.azurewebsites.net/' target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={slide.imageUrl} alt='advertisement' />
                            </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <h8>あなたのお悩みを私たちが解決します！</h8>
                </Row>
            </Container>
        </>        
    );
}
export default SideArea;