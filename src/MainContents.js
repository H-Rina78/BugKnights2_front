import ProductDetail from "./ProductDetail";
import SearchProducts from "./SearchProducts";
import { useState } from 'react';
import SearchByPrice from './SearchByPrice';
import MainTop from "./MainTop";

const MainContents = (props) =>{
    const [product, setProduct] = useState({});

    return(
        <>
            {(props.mainContentsView === 0) &&
                <MainTop setMainContentsView={props.setMainContentsView} setProduct={setProduct} />
            }
            {(props.mainContentsView === 1) &&
                <>
                    <SearchByPrice setUpperPrice={props.setUpperPrice} setLowerPrice={props.setLowerPrice}/>
                    <SearchProducts inputCategoryId={props.inputCategoryId} inputKeyword={props.inputKeyword} upperPrice={props.upperPrice} lowerPrice={props.lowerPrice} setMainContentsView={props.setMainContentsView} setProduct={setProduct}/>
                </>
            }
            {(props.mainContentsView === 2) &&
                <ProductDetail product={product} />
            }
        </>
    );
}

export default MainContents;