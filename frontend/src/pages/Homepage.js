import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Card, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Canvas from "../components/Canvas";
import '../styles/styles.css';

function Homepage() {
    return (
        <div>
            <Canvas className="behind"/>
            <Container className="p-4">
                <Row className="pb-4 text-white">
                    <h1 className="header main">Hi, I'm Matt</h1>
                    <p className="main"> I'm a software developer based in Gloucestershire</p>
                </Row>
                <Row className="pb-4 text-white main">
                    <h3 className="main">Here are some of the projects I've worked on:</h3>
                </Row>
                <Row>
                    <Col>
                        <Card className="mb-2">
                            <Card.Body>
                                <Card.Title>Recipe recommender 5000</Card.Title>
                                <Card.Text>
                                    An AI program to recommend recipes you'll like
                                </Card.Text>
                                <Link to="/recipes">
                                    <Button variant="dark">Try it out!</Button>{' '}
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-2">
                            <Card.Body>
                                <Card.Title>Another thing wot I made</Card.Title>
                                <Card.Text>
                                    I'm sure it does something really cool
                                </Card.Text>
                                <Link to="/">
                                    <Button variant="dark">Try it out!</Button>{' '}
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-2">
                            <Card.Body>
                                <Card.Title>Solved world hunger</Card.Title>
                                <Card.Text>
                                    I cooked up lots of food and solved world hunger
                                </Card.Text>
                                <Button variant="dark">Take a look!</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;
