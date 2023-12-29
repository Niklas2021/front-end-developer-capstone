import React, { useState } from 'react';
import { Button, Container, Col, Row} from 'react-bootstrap';
import './bookingForm.css';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const validationSchema = Yup.object().shape({
    chooseDate: Yup.string().required('You have to choose a Date'),
    chooseTime: Yup.string().required('You have to choose a Time'),
    chooseGuests: Yup.string().required('You have to specify the number of guests')
})

const initialValues = {
    chooseDate: '',
    chooseTime: '',
    chooseGuests: '',
};

const BookingForm = (props) => {
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        props.submitForm(values);
        resetForm();
        setSubmitting(false);
    }

    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
            <Form>
                <fieldset>
                    <Container style={{"margin-top" : "50px", "font-weight": "bold"}}>
                        <Row>
                            <Col>
                                <label htmlFor='book-date'>Choose Date:</label>
                            </Col>
                            <Col>
                            <Field type="date" id="chooseDate" name="chooseDate" />
                            <ErrorMessage name="chooseDate" component="div" className="error-message" style={{ color: 'red' }}/>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                            <label htmlFor='book-time'>Choose Time:</label>
                        </Col>
                        <Col>
                            <Field as='select' id='chooseTime' name='chooseTime'>
                                <option value=''>Select a Time</option>
                                {props.availableTimes.availableTimes && Array.isArray(props.availableTimes.availableTimes) ? (
                                props.availableTimes.availableTimes.map(availableTimes => (
                                    <option key={availableTimes}>{availableTimes}</option>
                                ))
                                ) : (
                                 <option value=''>Select a Time</option>
                                )}
                            </Field>
                            <ErrorMessage name='chooseTime' component='div' className='error-message' style={{ color: 'red' }}/>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                        </Col>
                        <Col>
                            <Field
                                type='number'
                                id='chooseGuests'
                                name='chooseGuests'
                                min='1'
                            />
                            <ErrorMessage name='chooseGuests' component='div' className='error-message' style={{ color: 'red' }}/>
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
                                <Button color="warning" className="btn-warning" type='submit' style={{"font-weight": "bold"}}>Reserve Now</Button>
                            </Col>
                        </Row>
                    </Container>
                </fieldset>
            </Form>
        </Formik>
    );
};

export default BookingForm;
