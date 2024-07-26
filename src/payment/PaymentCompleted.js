import {Button} from "react-bootstrap";
import { useNavigate} from "react-router-dom";

const PaymentCompleted = () =>{

    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    const btnStyle = {
        hight:'20px',
        width:'100px'
    }

    return(
        <>
        <h1>決済完了</h1>
        <Button className="ms-3 my-2" onClick={handleClick} style={btnStyle}>TOPへ戻る</Button>
        </>
    )
}

export default PaymentCompleted;