import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";

const RouteApp = () => {
    const [cart, setCart] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies(['userCookie']);

    useEffect(() => {
        // Cookieから既存のカート情報を読み込む
        const existingCart = cookies.cart;
        if (existingCart) {
            setCookies(JSON.parse(existingCart));
        } else {
          // Cookieがない場合、バックエンドからカート情報をフェッチ
          fetch('https://bugknights-b.azurewebsites.net/setCookie')
            .then(response => response.text())
            .then(data => {
                console.log(data); // クッキーが
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