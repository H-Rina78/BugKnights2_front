import Search from '../Search';
import SideArea from '../SideArea';
import MainContents from '../MainContents';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Header from '../Header';
import { useCookies } from "react-cookie";

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
  //ログイン管理用、0:非ログイン、1:ログイン
  const [checkLogin, setCheckLogin] = useState(false);
  //searchのカートボタンの商品
  const [cartProducts, setCartProducts] = useState([]);
  //searchのカートボタンの総商品数
  const [total, setTotal] = useState(0);
  //cookieの登録用
  const [cookies, , removeCookies] = useCookies('');

  useEffect(() => {
    // Cookieから既存のカート情報を読み込む
    if (cookies.loginSession !== undefined && cookies.loginSession !== null) {
      const formData = new FormData();
      formData.append('session', cookies.loginSession);
      fetch('http://localhost:8080/bk/checkLogin', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })
      .then(response => response.text())
      .then(data => {
        if(data === 'true') {
          setCheckLogin(true);
          console.log('ログイン済み');
        } else {
          console.log('間違ってるぞー');
          removeCookies('loginSession');
        }
      })
      .catch(error => console.error(error));
        console.log("エラー");
    } else {
      setCheckLogin(false);
    }
  }, [cookies.loginSession, removeCookies, setCheckLogin]);

  return (
    //表示管理用の値やセッターをそれぞれのコンポーネントに渡してる
    <>
      <Header checkLogin={checkLogin} setCheckLogin={setCheckLogin}/>
      <Search setInputKeyword={setInputKeyword}
      setInputCategoryId={setInputCategoryId}
      setMainContentsView={setMainContentsView}
      setUpperPrice={setUpperPrice}
      setLowerPrice={setLowerPrice}
      setCartProducts={setCartProducts}
      checkLogin={checkLogin}
      total={total}
      setTotal={setTotal}/>
      <Container fluid>
        <Row className='mt-3'>
          <Col className='col-2'>
            <SideArea setInputCategoryId={setInputCategoryId}
            setMainContentsView={setMainContentsView}
            setInputKeyword={setInputKeyword}
            setUpperPrice={setUpperPrice}
            setLowerPrice={setLowerPrice}
            inputCategoryId={inputCategoryId}/>
          </Col>
          <Col className='col-10'>
            <MainContents inputCategoryId={inputCategoryId}
            inputKeyword={inputKeyword}
            mainContentsView={mainContentsView}
            setMainContentsView={setMainContentsView}
            upperPrice={upperPrice}
            lowerPrice={lowerPrice}
            setUpperPrice={setUpperPrice}
            setLowerPrice={setLowerPrice}
            setInputKeyword={setInputKeyword}
            setInputCategoryId={setInputCategoryId}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            setTotal={setTotal}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainInformation;