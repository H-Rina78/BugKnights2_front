import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RegisterInformation from "./register/RegisterInformation";
import LoginInformation from "./logins/LoginInformation";
import CartInformation from "./carts/CartInformation";
import MainInformation from "./mains/MainInformation";
import RouteApp from "./RouteApp";

const routesConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
                <Route path="/" element={<RouteApp />} >
                    <Route path="/" element={<MainInformation />} />
                    <Route path="/register" element={<RegisterInformation />} />
                    <Route path="/login" element={<LoginInformation />} />
                    <Route path="/cart" element={<CartInformation />} />
                </Route>
        </>
    )
);

export default routesConfig;