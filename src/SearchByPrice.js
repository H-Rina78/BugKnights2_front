import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchByPrice = (props) => {
    const [minPrice, setMinPrice] = useState('0');
    const [maxPrice, setMaxPrice] = useState('9999');

    const SearchStyle = {
        backgroundColor:'#eaeaea'
    }

    const changeMin = (event) => {
        setMinPrice(event.target.value);
    }

    const changeMax = (event) => {
        setMaxPrice(event.target.value);
    }

    const handleSubmit = (event) => {
        // フォームのデフォルトの動作を防止する
        event.preventDefault();
        // 入力値を使用して何かを行う（例：サーバーにデータを送信する）
        if(maxPrice && minPrice) {
            props.setLowerPrice(minPrice);
            props.setUpperPrice(maxPrice);
        }
    }

    return (
        <>
            <Container fluid style={SearchStyle}>
                <form onSubmit={handleSubmit}>
                    <Row className='p-3'>
                        <Col className="col-2 h5">
                            価格で絞る
                        </Col>
                        <Col className='offset-1 col-3 text-center'>
                            <input
                                className='input-price min'
                                type="number"
                                value={minPrice} // 状態に格納された値を表示する
                                onChange={changeMin} // 入力値が変更されたときにハンドラー関数を呼び出す
                            />円～
                            <input
                                className='input-price max'
                                type="number"
                                value={maxPrice} // 状態に格納された値を表示する
                                onChange={changeMax} // 入力値が変更されたときにハンドラー関数を呼び出す
                            />円
                        </Col>
                        <Col>
                            <button className='btn btn-primary' type="submit">絞り込み</button>
                        </Col>
                        <Col className="col h6">
                            ※税抜き価格での絞り込みです
                        </Col>
                    </Row>
                </form>
            </Container>
        </>
    );
}
export default SearchByPrice;