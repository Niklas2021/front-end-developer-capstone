import "./nav.css";
import { Link } from 'react-router-dom';
import {Col} from 'react-bootstrap'

function Nav() {
    return (
        <>
            <Col></Col>
            <Col className="col d-flex align-items-center justify-content-center">
                <Link to="/" className='link'>Home</Link>
            </Col>
            <Col className="col d-flex align-items-center justify-content-center">
                <Link to="/about" className='link'>About</Link>
            </Col>
            <Col className="col d-flex align-items-center justify-content-center">
                <Link to="/menu" className='link'>Menu</Link>
            </Col>
            <Col className="col d-flex align-items-center justify-content-center">
                <Link to="/reservations" className='link'>Reservations</Link>
            </Col>
            <Col className="col d-flex align-items-center justify-content-center">
                <Link to="/order" className='link'>Order Online</Link>
            </Col>
            <Col className="col d-flex align-items-center justify-content-center">
                <Link to="/login" className='link'>Login</Link>
            </Col>
            <Col className="col-2"></Col>
        </>
    );
}

export default Nav;