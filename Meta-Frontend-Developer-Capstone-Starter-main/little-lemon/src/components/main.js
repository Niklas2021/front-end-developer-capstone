import "./main.css";
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [showImg, setShowImg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Überprüfen der Bildschirmgröße und Aktualisieren des State
            setShowImg(window.innerWidth >= 1225); // Hier kannst du die Breakpoint-Größe nach Bedarf anpassen
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
        <>
            <Row className="background">
                <Col className={showImg? "offset-2 col-3 left" : "col-7 offset-2 left"} style={{"margin-top": "70px"}}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant,  focused on traditional recipies served with a modern twist.</p>
                    <Link to="/booking"><Button color="warning" className="btn-warning" style={{"font-weight": "bold"}}>Reserve a Table</Button></Link>
                </Col>
                {showImg && (
                    <Col className="col-3 offset-2">
                        <img className="img" src="restauranfood.jpg" alt="ReFood"/>
                    </Col>
                )}
            </Row>
            <Container style={{"margin-top": "20px"}}>
                <Row className="spHead" style={{"margin-top": "80px"}}>
                    <Col className={showImg? "col-5" : "col-8"}>
                        <h1>This weeks specials!</h1>
                    </Col>
                    <Col className={showImg? "col-2 offset-5" : "col-4 "}>
                        <Button color="warning" className="btn-warning" style={{"font-weight": "bold"}}>Online Menu</Button>
                    </Col>
                </Row>
                <Row style={{"margin-top": "50px"}}>
                    <Col md={4}>
                    <Card data-testid="main-1">
                        <Card.Img variant="top" src="greeksalad.jpg" />
                        <Card.Body>
                        <Card.Title>Greek Salad</Card.Title>
                        <Card.Text className="card-description">
                            The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosmary.
                        </Card.Text>
                        <Card.Text>Preis: $19.99</Card.Text>
                        <Button variant="warning" style={{"font-weight": "bold"}} onClick={props.show}>Bestellen</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="bruchetta.jpg" />
                        <Card.Body>
                        <Card.Title>Bruchetta</Card.Title>
                        <Card.Text className="card-description">
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </Card.Text>
                        <Card.Text>Preis: $29.99</Card.Text>
                        <Button variant="warning" style={{"font-weight": "bold"}} onClick={props.show}>Bestellen</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="desert.jpg" />
                        <Card.Body>
                        <Card.Title>Lemon Dessert</Card.Title>
                        <Card.Text className="card-description">
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </Card.Text>
                        <Card.Text>Preis: $39.99</Card.Text>
                        <Button variant="warning" style={{"font-weight": "bold"}} onClick={props.show}>Bestellen</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Main;