import React,{useState} from 'react'
import {Button,
        Card,
        Container,
        Row,
        Col,
        Image} from 'react-bootstrap';
        
//import {Alert} from 'react-alert'
import AlertDismissible from './AlertDismissible';


//https://react-bootstrap.github.io/getting-started/introduction
function SampleReactBootStapWebPage() {
    const [showAlert, setShowAlert] = useState(false);
    const [successMsg,setsuccessMsg] = useState('');
    const [msgBody,setmsgBody] = useState('');
    const [msgBody2,setmsgBody2] = useState('');
    
    const openAlert = (e) => {
        e.preventDefault();
        setsuccessMsg('alert alert-success')
        setmsgBody("Student Information Add/Update Information")
        setmsgBody2("Successfully wrote record!!!")
        setShowAlert(true);
    }

    const closeAlert = (e) => {
        e.preventDefault();
        setShowAlert(false);
    }

    const openAlertError = (e) => {
        e.preventDefault();
        setsuccessMsg('alert alert-danger')
        setmsgBody("Student Information Add/Update Information")
        setmsgBody2("There was an issue writing the record !!!")
        setShowAlert(true);
    }

  return (
    <div className='SampleReactBootStapWebPage'>
          <AlertDismissible 
             show = {showAlert}
             toogleAlert = {(e) => closeAlert(e)}
             msgClass = {successMsg}
             msgBody = {msgBody}
             msgBody2 = {msgBody2}
            />
           {/*
           {showAlert && (
           <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr/>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                <Button
                        variant="warning" onClick={() => closeNominations()}>
                        Dismiss
                </Button>
            </div>
            )}
           */}
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

                  <Row>
                    <Button
                        variant="primary" onClick={(e) => openAlert(e)}>
                         Show Alert
                    </Button>
                    <Button
                        variant="danger" onClick={(e) => openAlertError(e)}>
                         Show Danger Alert
                    </Button>
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