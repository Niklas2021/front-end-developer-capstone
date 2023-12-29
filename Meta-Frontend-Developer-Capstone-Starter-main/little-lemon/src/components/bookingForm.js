import React, { useState } from 'react';
import { Button, Form,  Container, Col, Row} from 'react-bootstrap';
import './bookingForm.css';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <Container>
                        <Row>
                            <Col>
                                <label htmlFor='book-date'>Choose Date:</label>
                            </Col>
                            <Col>
                            <Form.Control type="date" name="datepic" placeholder="DateRange" value={date} id="book-date" onChange={(e) => handleChange(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor='book-time'>Choose Time:</label>
                            </Col>
                            <Col>
                                <select id='book-time' className='form-control' value={time} onChange={(e) => setTime(e.target.value)}>
                                {props.availableTimes && Array.isArray(props.availableTimes) ? (
                                    props.availableTimes.map(availableTime => (
                                    <option key={availableTime}>{availableTime}</option>
                                    ))
                                ) : (
                                    <option value="">Select a Time</option> )}
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor='book-guests'>Number of Guests:</label>
                            </Col>
                            <Col>
                                <input className="form-control" id="book-guests" min="1" type="number" placeholder="Number" onChange={(e) => setGuests(e.target.value)} value={guests} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor='book-occasion'>Occasion: </label>
                            </Col>
                            <Col>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(e) => setOccasion(e.target.value)} value={occasion}/>
                                    <label class="form-check-label" for="exampleCheck1"> Birthday</label>
                                </div>
                            </Col>
                            <Col>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck2" onChange={(e) => setOccasion(e.target.value)} value={occasion}/>
                                    <label class="form-check-label" for="exampleCheck2"> Anniversary</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button color="warning" className="btn-warning" style={{"font-weight" : "bold"}} aria-label='On Click' type='submit'>Reserve Now</Button>
                            </Col>
                        </Row>
                    </Container>
                </fieldset>
            </form>
        </>
    );
};

export default BookingForm;
