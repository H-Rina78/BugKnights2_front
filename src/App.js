import './App.css';
import Header from './Header';
import Search from './Search';
import SideArea from './SideArea';
import MainContents from './MainContents';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const App = () =>{
  const [inputCategoryId, setInputCategoryId] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [upperPrice, setUpperPrice] = useState(NaN);
  const [lowerPrice, setLowerPrice] = useState(NaN);
  const [mainContentsView, setMainContentsView] = useState(0);

  return (

    <>
      <Header />
      <Search setInputKeyword={setInputKeyword} setInputCategoryId={setInputCategoryId} setMainContentsView={setMainContentsView} setUpperPrice={setUpperPrice} setLowerPrice={setLowerPrice}/>
      <Container fluid>
        <Row className='mt-3'>
          <Col className='col-2'>
            <SideArea setInputCategoryId={setInputCategoryId} setMainContentsView={setMainContentsView} setInputKeyword={setInputKeyword} setUpperPrice={setUpperPrice} setLowerPrice={setLowerPrice} inputCategoryId={inputCategoryId}/>
          </Col>
          <Col className='col-10'>
            <MainContents inputCategoryId={inputCategoryId} inputKeyword={inputKeyword} mainContentsView={mainContentsView} setMainContentsView={setMainContentsView} upperPrice={upperPrice} lowerPrice={lowerPrice} setUpperPrice={setUpperPrice} setLowerPrice={setLowerPrice}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
