import { useNavigate } from "react-router-dom";
import SimpleHeader from "../SimpleHeader";

const CartInformation = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    return (
        <>
        <SimpleHeader />
        <h1>カートです</h1>
        <button onClick={handleClick}>トップ</button>
        </>
    );
}

export default CartInformation;