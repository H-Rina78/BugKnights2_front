import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SearchProducts = (props) => {
    //URL用の変数。これが変わると再レンダリングされる
    let stringUrl;

    //カテゴリが選択されてる場合
    if(props.inputCategoryId !== "") {
        //カテゴリかつ価格帯が選択されてる場合
        if(!Number.isNaN(props.upperPrice) && !Number.isNaN(props.lowerPrice)) {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/categoryP?category_id=${props.inputCategoryId}&upper_price=${props.upperPrice}&lower_price=${props.lowerPrice}`;
        //カテゴリのみ選択されてる場合
        } else {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/category?category_id=${props.inputCategoryId}`;
        }
    //キーワードが選択されてる場合
    } else if(props.inputKeyword !== "") {
        //キーワードかつ価格帯が選択されてる場合
        if(!Number.isNaN(props.upperPrice) && !Number.isNaN(props.lowerPrice)) {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/keywordP?keyword=${props.inputKeyword}&upper_price=${props.upperPrice}&lower_price=${props.lowerPrice}`;
        //キーワードのみされてる場合
        } else {
            stringUrl = `https://bugknights-b.azurewebsites.net/search/keyword?keyword=${props.inputKeyword}`;
        }
    }
    
    //表示内容のJSONを保存するstate
    const [MainCards, setMainCards] = useState([]);

    //詳細ボタンを押したときの商品情報を保存
    //その後商品詳細に移動
    const handleCardClick = (product) => {
        props.setProduct(product);
        props.setMainContentsView(2);
    }

    //コンポーネント表示の際に一定の秒数遅らせるstate
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        // 1秒後にコンポーネントを表示する
        const timer = setTimeout(() => {
        setShowComponent(true);
        }, 1000);

        // コンポーネントがアンマウントされた場合、タイマーをクリアする
        return () => clearTimeout(timer);
    }, []);

    //stringURLが書き換わった際にJSONデータをフェッチする
    useEffect(() => {
        const fetchProduct = () => {
            fetch(stringUrl)
            .then(response => response.json())
            .then(data => {
                setMainCards(data);
            })
            .catch(error => {
                console.log(error);
            });
        }

        fetchProduct();
    }, [stringUrl]);

        return (
            <>
                <div className='row'>
                    {MainCards.map((product) => (
                        <div key={product.id} className='col-3 my-2' onClick={() => handleCardClick(product)}>
                            <Card style={{ width: '15rem', height: '25rem' }}>
                                <Card.Img variant='top' src={`https://bugknights.blob.core.windows.net/products/${product.imageName}`} style={{ width: '100%', height: '10rem' }} />
                                <Card.Body>
                                    <Card.Text>{product.name}</Card.Text>
                                    <Card.Text>{product.overview}</Card.Text>
                                    <Card.Title>{product.price}円</Card.Title>
                                    <Card.Text>
                                        (税込 {product.price * 11 / 10}円)
                                    </Card.Text>
                                    <Card.Link href="#" onClick={(e) => { e.preventDefault(); handleCardClick(product); }}></Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    {/* JSONデータがない、かつ、1秒たったら表示 */
                    MainCards.length === 0 && showComponent &&
                        <h2>ご指定の条件に一致する商品は見つかりませんでした。</h2>}
                </div>
                <div className='detail-modal'></div>
            </>
        );
}

export default SearchProducts