import { useNavigate } from "react-router-dom";

const CartInformation = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    return (
        <>
        <h1>カートです</h1>
        <button onClick={handleClick}>トップ</button>
        </>
    );
}

export default CartInformation;