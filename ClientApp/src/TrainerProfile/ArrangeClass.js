import React from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'

function ArrangeClass() {
  return (
    <section className='bg-dark'>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '550px', height: '500px', backgroundColor: 'white', borderRadius: '10px', paddingTop: '50px' }}>
          <Card.Body>
            <h2 className="text-center mb-4 arrangeclassh2">Set Class Time</h2>
            <Form>
              <Form.Group controlId="classNameInput" className='d-flex pb-3'>
                <Form.Label>Class Name</Form.Label>
                <Form.Control
                  type="text"
                  name="className"
                  // value={classTime.className}
                  // onChange={handleChange}
                  placeholder="Enter class name"
                />
              </Form.Group>
              <Form.Group controlId="classNameInput" className='d-flex pb-3'>
                <Form.Label>Class Day</Form.Label>
                <Form.Control
                  type="text"
                  name="className"
                  // value={classTime.className}
                  // onChange={handleChange}
                  placeholder="Enter class name"
                />
              </Form.Group>
              <Form.Group controlId="startTimeInput" className='d-flex pb-3'>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  name="startTime"
                  // value={classTime.startTime}
                  // onChange={handleChange}
                  placeholder="Enter start time"
                />
              </Form.Group>
              <Form.Group controlId="finishTimeInput" className='d-flex pb-3'>
                <Form.Label>Finish Time</Form.Label>
                <Form.Control
                  type="time"
                  name="finishTime"
                  // value={classTime.finishTime}
                  // onChange={handleChange}
                  placeholder="Enter finish time"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-6 mx-auto arrangeClassBtn">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}

export default ArrangeClass