import "./footer.css";
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import {Facebook, Youtube, Instagram, Twitter} from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer style={{"margin-top": "100px"}}>
            <Container style={{"border-top": "1px solid black"}}>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <img src="logo.png" className="img-fluid logo" style={{maxWidth: "350px", minWidth: "200px", margin: "20px" }} alt="Logo"/><br/>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" style={{"margin-top": "30px"}}>
                        <ul style={{listStyle: "none", display: "flex", "white-space": "nowrap"}}>
                            <li><Link to="/" className='link'>Home</Link></li>
                            <li><Link to="/about" className='link'>About</Link></li>
                            <li><Link to="/menu" className='link'>Menu</Link></li>
                            <li><Link to="/booking" className='link'>Reservations</Link></li>
                            <li><Link to="/order" className='link'>Order Online</Link></li>
                            <li><Link to="/login" className='link'>Login</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <ul style={{listStyle: "none", display: "flex", "white-space": "nowrap"}}>
                            <li><a href="https://www.youtube.com" style={{textDecoration: "none", color: "black"}}><Youtube /> YouTube</a></li>
                            <li><a href="https://www.twitter.com" style={{textDecoration: "none", color: "black"}}><Twitter /> Twitter</a></li>
                            <li><a href="https://www.facebook.com" style={{textDecoration: "none", color: "black"}}><Facebook/> Facebook</a></li>
                            <li><a href="https://www.instagram.com" style={{textDecoration: "none", color: "black"}}><Instagram /> Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center"><p>&copy; 2023 Your Company. All rights reserved.</p></Col>
                </Row>
            </Container>
        </footer>
  );
}

export default Footer;