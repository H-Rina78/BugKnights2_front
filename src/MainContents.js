import ProductDetail from "./ProductDetail";
import SearchProducts from "./SearchProducts";
import { useState } from 'react';
import SearchByPrice from './SearchByPrice';
import MainTop from "./MainTop";

const MainContents = (props) =>{
    //商品詳細用のデータ保存用
    //SearchProductsでセッターを呼び出して登録してる
    const [product, setProduct] = useState('');
    return(
        <>
            {(props.mainContentsView === 0) &&
            <>
                {/* <RecommendTop /> */}
                <MainTop setMainContentsView={props.setMainContentsView} 
                setProduct={setProduct} />
            </>
            }
            {(props.mainContentsView === 1) &&
                <>
                    <SearchByPrice setUpperPrice={props.setUpperPrice} 
                    setLowerPrice={props.setLowerPrice}/>
                    <SearchProducts 
                    inputCategoryId={props.inputCategoryId} 
                    inputKeyword={props.inputKeyword} 
                    upperPrice={props.upperPrice} 
                    lowerPrice={props.lowerPrice} 
                    setMainContentsView={props.setMainContentsView} 
                    setProduct={setProduct}/>
                </>
            }
            {(props.mainContentsView === 2) &&
                <ProductDetail product={product} 
                setMainContentsView={props.setMainContentsView} 
                setUpperPrice={props.setUpperPrice} 
                setLowerPrice={props.setLowerPrice} 
                setInputKeyword={props.setInputKeyword} 
                setInputCategoryId={props.setInputCategoryId} 
                setProduct={setProduct} productCart={props.products} 
                setProductCart={props.setProducts}/>
            }
        </>
    );
}

export default MainContents;