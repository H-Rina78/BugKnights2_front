import { Container, Row } from "react-bootstrap";
import SimpleHeader from "../SimpleHeader";

const MyPage = () =>{

    const AllStyle = {
        backgroundColor: "#eaeaea"
    }

    return(
        <>
        <SimpleHeader />
        <Container style={AllStyle}>
            <Row>
                <span>マイページ</span>
            </Row>
            <Row>
                <span>○○様</span>
            </Row>
            <Row>
                <p>登録情報</p>
                <Row>
                    <p>基本情報</p>
                    <span>氏名：</span>
                    <span>メールアドレス：</span>
                    <span>電話番号：</span>
                    <span>住所：</span>
                </Row>
            </Row>
        </Container>
        </>
    )
}

export default MyPage;