import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RegisterInformation from "./register/RegisterInformation";
import LoginInformation from "./logins/LoginInformation";
import CartInformation from "./carts/CartInformation";
import MainInformation from "./mains/MainInformation";
import MyPage from "./mypage/MyPage";
import NewUser from "./register/NewUser";
import BasicRevision from "./register/BasicRevision";
import MailRevision from "./register/mailRevision";
import SecretInfoRevision from "./register/secretInfoRevision";

const routesConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainInformation />} />
            <Route path="/register" element={<RegisterInformation />} />
            <Route path="/login" element={<LoginInformation />} />
            <Route path="/cart" element={<CartInformation />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/basicRevision" element={<BasicRevision />} />
            <Route path="/mailRevision" element={<MailRevision />} />
            <Route path="/secretInfoRevision" element={<SecretInfoRevision />} />
        </>
    )
);

export default routesConfig;