import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sideArea.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';

const SideArea = (props) => {
    //サイドエリアのどのボタンを押したかの情報を切り替え
    //1～7で情報を設定
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
        color: 'black'
    }

    const advertisement = {
        backgroundColor:'#4169e1',
        color:'#ffffff'
    }
    const advertisementTop = {
        border: "solid 2px #afeeee",
        borderRadius: "5px",
        padding: "8px",
        margin: "8px"
    }

    const advertisement2 = {
        backgroundColor:'#ff8914',
        color:'#ffffff'
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

      const handleTopButton = () => {
        props.setInputCategoryId("");
        props.setMainContentsView(0);
        props.setInputKeyword("");
        props.setUpperPrice(NaN);
        props.setLowerPrice(NaN);
      }
    

    return(
        <>
            <Container>
                <Row>
                    <Col className="category col-12 ms-4 h4 border-start border-5">
                        カテゴリ
                    </Col>
                </Row>
                <Row>
                <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={handleTopButton} value={0} style={Number(props.inputCategoryId) === 0 ? testStyle : testStyle2}>
                            すべて
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={1} style={Number(props.inputCategoryId) === 1 ? testStyle : testStyle2}>
                            野菜
                        </button>
                    </Col>
                    
                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={2} style={Number(props.inputCategoryId) === 2 ? testStyle : testStyle2}>
                            お肉
                        </button>
                    </Col>
                    
                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={3} style={Number(props.inputCategoryId) === 3 ? testStyle : testStyle2}>
                            魚介
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={4} style={Number(props.inputCategoryId) === 4 ? testStyle : testStyle2}>
                            スイーツ
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={5} style={Number(props.inputCategoryId) === 5 ? testStyle : testStyle2}>
                            飲み物
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={6} style={Number(props.inputCategoryId) === 6 ? testStyle : testStyle2}>
                            果物
                        </button>
                    </Col>

                    <Col className="col-6 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={7} style={Number(props.inputCategoryId) === 7 ? testStyle : testStyle2}>
                            惣菜
                        </button>
                    </Col>
                </Row>
                <Row className='row px-1 mt-4 justify-content-center' style={advertisement}>
                    <Row className='justify-content-center h5' style={advertisementTop}>
                            相談予約受付中
                    </Row>
                    <Carousel>
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.id} interval={1000}>
                            <a href='https://reservebugnights.azurewebsites.net/' target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={slide.imageUrl} alt='advertisement' />
                            </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <p className='h8'>あなたのお悩みを私たちが解決します！</p>
                </Row>
                <Row className='py-3'>
                    <img className='p-0' style={{width: '100%', height: '18rem'}} src='https://bugknights.blob.core.windows.net/products/広告.png' />
                </Row>
            </Container>
        </>        
    );
}
export default SideArea;