import "./main.css";
import { Container, Row, Col, Button, Card} from 'react-bootstrap'

const Body = () => {
    return (
        <Container style={{"margin-top": "20px"}}>
            <Row className="background">
                <Col className="col-3 left" md={{offset:2}} style={{"margin-top": "20px"}}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant,  focused on traditional recipies served with a modern twist.</p>
                    <Button color="warning" className="btn-warning" style={{"font-weight": "bold"}}>Reserve a Table</Button>
                </Col>
                <Col className="col"></Col>
                <Col className="col-3">
                    <img className="img" src="restauranfood.jpg" alt="ReFood"/>
                </Col>
                <Col className="col"></Col>
            </Row>
            <Row className="spHead" style={{"margin-top": "80px"}}>
                <Col className="col-5" md={{offset: 2}}>
                    <h1>This weeks specials!</h1>
                </Col>
                <Col className="col" md={{offset:2}}>
                    <Button color="warning" className="btn-warning" style={{"font-weight": "bold"}}>Online Menu</Button>
                </Col>
            </Row>
            <Row style={{"margin-top": "50px"}}>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="greeksalad.jpg" />
                    <Card.Body>
                    <Card.Title>Greek Salad</Card.Title>
                    <Card.Text className="card-description">
                        The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosmary.
                    </Card.Text>
                    <Card.Text>Preis: $19.99</Card.Text>
                    <Button variant="primary">Bestellen</Button>
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
                    <Button variant="primary">Bestellen</Button>
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
                    <Button variant="primary">Bestellen</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Body;