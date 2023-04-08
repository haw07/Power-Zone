import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './Profile.css'; // Import custom CSS file for styling


const Profile = () => {

  return (
    <Container class="profileContainer">
        <Row>
        <Col md={4}>
            <Image src="https://via.placeholder.com/300x300" roundedCircle />
            <h4 className="mt-3">John Doe</h4>
            <p className="text-muted">Member since 2020</p>
            <Button variant="primary" className="mb-3" class="button">Edit Profile</Button>
            <Card>
            <Card.Body>
                <h5>About Me</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis justo sit amet semper tristique.</p>
            </Card.Body>
            </Card>
        </Col>
        <Col md={8}>
            <h2>My Gym Activities</h2>
            <hr />
            <Row>
            <Col md={6}>
                <Card>
                <Card.Body class="card-body">
                    <h5>Weightlifting</h5>
                    <p className="text-muted">3x per week</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis justo sit amet semper tristique.</p>
                </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                <Card.Body>
                    <h5>Yoga</h5>
                    <p className="text-muted">1x per week</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis justo sit amet semper tristique.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            <hr />
            <h2>My Gym Stats</h2>
            <Row>
            <Col md={4}>
                <Card>
                <Card.Body>
                    <h5>Height</h5>
                    <p className="text-muted">175 lbs</p>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                <Card.Body>
                    <h5>Weight</h5>
                    <p className="text-muted">175 lbs</p>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                <Card.Body>
                    <h5>BMI</h5>
                    <p className="text-muted">25.1</p>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                <Card.Body>
                    <h5>Body Fat</h5>
                    <p className="text-muted">18.2%</p>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                <Card.Body>
                    <h5>Muscle Mass</h5>
                    <p className="text-muted">175 lbs</p>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
            <Card>
                <Card.Body>
                    <h5>Progress Assessment</h5>
                    <p className="text-muted">18.2%</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Col>
        </Row>
    </Container>
    );
};

export default Profile;