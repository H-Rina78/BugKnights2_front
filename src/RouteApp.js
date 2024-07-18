import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";

const RouteApp = () => {
    const [cart, setCart] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies(['cart', 'loginInfo']);

    useEffect(() => {
        // Cookieから既存のカート情報を読み込む
        const existingCart = cookies.cart;
        console.log(existingCart);
        if (existingCart !== null) {
            // setCookies(JSON.parse(existingCart));
            console.log("すでにあるよー");
        } else {
          // Cookieがない場合、バックエンドからカート情報をフェッチ
          fetch('https://bugknights-b.azurewebsites.net/setCookie')
            .then(response => response.text())
            .then(data => {
                console.log(data); // クッキーがあるか確認
                setCookies('loginInfo', '0');
                setCookies('cart', "");
                console.log(cookies.myCookie); // Cookieが正しくセットされているか確認
            })
            .catch(error => console.error(error));
        }
      }, []);

    return (
        <>
            <Outlet context={[cookies, setCookies, removeCookies]} />
        </>
    );
}

export default RouteApp;