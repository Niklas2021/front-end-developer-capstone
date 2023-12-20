import "./header.css";
import Nav from "./nav";
import { Container, Row, Col} from 'react-bootstrap'

function Header() {
    return (
        <Container fluid>
            <Row>
                <Col className="col-3" md={{offset: 1}}>
                    <img src="logo.png" className="img-fluid logo" style={{margin: "20px"}} alt="Logo"/>
                </Col>
                <Nav/>
            </Row>
        </Container>
    );
}

export default Header;