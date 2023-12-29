import "./nav.css";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleResize = () => {
            // Überprüfen der Bildschirmgröße und Aktualisieren des State
            setShowIcon(window.innerWidth >= 1025); // Hier kannst du die Breakpoint-Größe nach Bedarf anpassen
        };

        // Event-Listener für das Resize-Event hinzufügen
        window.addEventListener('resize', handleResize);

        // Initialen Aufruf für die erste Überprüfung der Bildschirmgröße
        handleResize();

        // Event-Listener bei Komponentenzerstörung entfernen
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <Container fluid>
                <Row>
                    <Col className="col-2 offset-1">
                        <img src="logo.png" className="img-fluid logo" style={{margin: "20px"}} alt="Logo"/>
                    </Col>
                    {!showIcon && (
                        <Col className="col-2 offset-6 d-flex align-items-center">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={handleDropdownToggle}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </Col>
                    )}
                    {(showIcon || (showDropdown && !showIcon)) && (
                        <>
                            <Col className="col offset-1 d-flex align-items-center justify-content-center">
                                <Link to="/" className='link'>Home</Link>
                            </Col>
                            <Col className="col d-flex align-items-center justify-content-center">
                                <Link to="/about" className='link'>About</Link>
                            </Col>
                            <Col className="col d-flex align-items-center justify-content-center">
                                <Link to="/menu" className='link'>Menu</Link>
                            </Col>
                            <Col className="col d-flex align-items-center justify-content-center">
                                <Link to="/booking" className='link'>Reservations</Link>
                            </Col>
                            <Col className="col d-flex align-items-center justify-content-center">
                                <Link to="/order" className='link'>Order Online</Link>
                            </Col>
                            <Col className="col d-flex align-items-center justify-content-center">
                                <Link to="/login" className='link'>Login</Link>
                            </Col>
                            <Col></Col>
                        </>
                    )}
                </Row>
            </Container>
        </nav>
    );
}

export default Nav;