import React, { useState } from 'react';
import './Search.css';
import {BsSearch} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = (props) =>{
    //テキストボックスの中身
    const [search, setSearch] = useState("");

    //css
    const SearchStyle = {
        backgroundColor:'#eaeaea'
    }
    
    //ボタンを押したとき、他のカテゴリ値を初期化
    //ボタンを押したときのテキストボックスの値をカテゴリ値にセット
    const handleButton = () => {
        props.setInputKeyword(search);
        props.setInputCategoryId("");
        props.setMainContentsView(1);
        props.setUpperPrice(NaN);
        props.setLowerPrice(NaN);
    }

    //テキストボックスの値が変わるたびに値を保存
    const handleChange = (event) => {setSearch(event.target.value)}
    return(
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
        </div>
        </div>
    )
}

export default Search;