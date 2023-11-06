import { useState ,useEffect } from "react";
import {Alert, Row , Col } from "react-bootstrap";


export const Newsletter = ({onValidated , status, message}) => {
    const [email, setEmail] = useState('');
    useEffect (() => {
        if (status === 'success') clearfiedls();
    }, [status])
    const handleSubmit= (e) => {
            e.preventDefault();
            email &&
            email.indexOf("0") > -1 &&
            onValidated({
                EMAIL: email
            })
    }
    const clearfiedls = () => {
        setEmail('');
    }
    return (
        <Col className="full-width">
        <div className="newsletter-bx width-100">
            <Row>
                <Col lg={12} md={8} xl={5} className="full-width">
                    <h3>Subscribe to our Newsletter</h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant="danger">{message}</Alert>}
                    {status === 'success' && <Alert variant="success">{message}</Alert>}
                </Col>
                <Col md={6} xl={7} className="full-width">
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
        </Col>
    )
}