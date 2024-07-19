import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";

const RouteApp = () => {
    const [cookies, setCookies] = useCookies('');

    useEffect(() => {
        // Cookieから既存のカート情報を読み込む
        if (cookies.ore === null) {
            console.log("Cookie生成済み");
        } else {
          // Cookieがない場合、バックエンドからカート情報をフェッチ
          fetch('https://bugknights-b.azurewebsites.net/setCookie')
            .then(response => response.text())
            .then(data => {
                console.log(data); // クッキーがあるか確認
                setCookies('loginInfo', 0);
                setCookies('cart', []);
                setCookies('checkCookie', 'true');
            })
            .catch(error => console.error(error));
        }
      }, [cookies.ore, setCookies]);

    return (
        <>
            <Outlet context={[cookies, setCookies, removeCookies]} />
        </>
    );
}

export default RouteApp;