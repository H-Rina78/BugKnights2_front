import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sideArea.css';

const SideArea = (props) => {
    const changeCategory = (event) => {
        props.setInputCategoryId(event.target.value);
        props.setMainContentsView(1);
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
                    
                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={1}>
                            <span>野菜</span>
                        </button>
                    </Col>
                    
                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={2}>
                            <span>お肉</span>
                        </button>
                    </Col>
                    
                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={3}>
                            <span>魚介</span>
                        </button>
                    </Col>

                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={4}>
                            <span>スイーツ</span>
                        </button>
                    </Col>

                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={5}>
                            <span>飲み物</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </>        
    );
}
export default SideArea;