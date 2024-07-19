import Search from '../Search';
import SideArea from '../SideArea';
import MainContents from '../MainContents';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Header from '../Header';
import { useOutletContext } from 'react-router-dom';

const MainInformation = () => {
    //表示管理用のstate。
  //カテゴリ管理用、1:野菜、2:お肉、3:魚介、4:スイーツ、5:飲み物
  const [inputCategoryId, setInputCategoryId] = useState("");
  //キーワード管理用、ボタン押したときのキーワードを保存
  const [inputKeyword, setInputKeyword] = useState("");
  //価格管理用、上限と下限の価格を保存
  const [upperPrice, setUpperPrice] = useState(NaN);
  const [lowerPrice, setLowerPrice] = useState(NaN);
  //画面管理用、0:TOP画面、1:商品ページ、2:商品詳細ページ
  const [mainContentsView, setMainContentsView] = useState(0);

  return (
    //表示管理用の値やセッターをそれぞれのコンポーネントに渡してる
    <>
      <Header />
      <Search setInputKeyword={setInputKeyword} setInputCategoryId={setInputCategoryId} setMainContentsView={setMainContentsView} setUpperPrice={setUpperPrice} setLowerPrice={setLowerPrice}/>
      <Container fluid>
        <Row className='mt-3'>
          <Col className='col-2'>
            <SideArea setInputCategoryId={setInputCategoryId} setMainContentsView={setMainContentsView} setInputKeyword={setInputKeyword} setUpperPrice={setUpperPrice} setLowerPrice={setLowerPrice} inputCategoryId={inputCategoryId}/>
          </Col>
          <Col className='col-10'>
            <MainContents inputCategoryId={inputCategoryId} inputKeyword={inputKeyword} mainContentsView={mainContentsView} setMainContentsView={setMainContentsView} upperPrice={upperPrice} lowerPrice={lowerPrice} setUpperPrice={setUpperPrice} setLowerPrice={setLowerPrice} setInputKeyword={setInputKeyword} setInputCategoryId={setInputCategoryId}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainInformation;