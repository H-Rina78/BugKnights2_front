import React, { useState } from 'react';
import './Search.css';
import { BsSearch } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsCart4 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Search = (props) => {
    const [cookies, setCookies] = useCookies('');
    const [search, setSearch] = useState("");

    const SearchStyle = {
        backgroundColor: '#eaeaea'
    }

    const handleButton = () => {
        props.setInputKeyword(search);
        props.setInputCategoryId("");
        props.setMainContentsView(1);
        props.setUpperPrice(NaN);
        props.setLowerPrice(NaN);
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const navigate = useNavigate();

    const handleCartClick = () => {
        // カートアイコンをクリックした時の処理をここに追加する
        // 例えばカートの内容を表示するポップアップを開くなど
        navigate("/cart");
    }

    return (
        <div className='container-fluid'>
            <div className='row py-3' style={SearchStyle}>
                <div className='col-5'>
                    <InputGroup className="m-1" onChange={handleChange}>
                        <Form.Control
                            placeholder="商品名を入力してください"
                            aria-label="product"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" disabled={!search} onClick={handleButton}>
                            <BsSearch />
                        </Button>
                    </InputGroup>
                </div>
                <div className='col text-end'>
                    <Button onClick={handleCartClick} className="cart-button">
                        <div style={{ position: 'relative', display: 'inline-block', width: '90px' }}>
                            <BsCart4 size={24} /> {/* アイコンのサイズを指定 */}
                            カート
                            {cookies.cart.length > 0 && (
                                <Badge bg="secondary" className="cart-badge">
                                    {cookies.cart.length}
                                </Badge>
                            )}
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Search;
