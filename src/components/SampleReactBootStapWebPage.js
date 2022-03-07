import React from 'react'
import {Button,
        Card,
        Container,
        Row,
        Col,
        Image} from 'react-bootstrap';

//https://react-bootstrap.github.io/getting-started/introduction
function SampleReactBootStapWebPage() {
  return (
    <div className='SampleReactBootStapWebPage'>
     <main>
         <Container>
                  <Row className='px-4 my-5'>
                      <Col sm={8}>
                      <Image
                       src='https://picsum.photos/900/400'
                        fluid
                        rounded
                      />                     
                      </Col>
                     
                      <Col sm={4}>
                          <h1 class='font-weight-light'>
                            Tagline
                          </h1>
                          <p class="mt-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                          </p>
                          <Button variant="outline-primary">Call to Action</Button>
                      </Col>
                  </Row>

                  <Row>
                      <Card className='text-center bg-secondary text-white my-5 py-4'>
                        <Card.Body>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Card.Body>
                      </Card>
                  </Row>

                  <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" 
                                src="https://picsum.photos/id/200/320/200" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" 
                                src="https://picsum.photos/320/200" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" 
                                src="https://picsum.photos/320/200" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                  </Row>
         </Container>
     </main>
     <footer class='py-5 my-5 bg-dark'>
      <Container className='px-4'>
       <p class='text-center text-white'>Copyright &copy; React Bootstrap Website Example 2022</p>
      </Container>
     </footer>
    </div>
  )
}

export default SampleReactBootStapWebPage