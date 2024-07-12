import React, { useState } from 'react';
import './Search.css';
import {BsSearch} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = (props) =>{
    const [search, setSearch] = useState("");

    const SearchStyle = {
        backgroundColor:'#eaeaea'
    }
    
    const handleButton = () => {
        props.setInputKeyword(search);
        props.setInputCategoryId("");
        props.setMainContentsView(1);
        props.setUpperPrice(NaN);
        props.setLowerPrice(NaN);
    }

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
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleButton}>
                        <BsSearch />
                    </Button>
                </InputGroup>
                </div>
        </div>
        </div>
    )
}

export default Search;