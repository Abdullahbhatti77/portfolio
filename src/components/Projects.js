import React from 'react'
import { Card, CardTitle, CardBody, CardText, Button, Row, Col } from "reactstrap"

export default function Projects() {
    return (
        <>
            <h1
                style={{ textAlign: 'center', position: 'relative', marginTop: '50px', cursor: 'pointer' }}
            >
                    Projects
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '90px',
                        height: '2px',
                        backgroundColor: 'orange',
                        transition: 'width 0.3s ease-in-out',
                    }}
                />
            </h1>

            <div className='container mt-5'>
                <Row className='g-5'>
                    <Col md="6" style={{ display: 'flex', justifyContent: 'center', height: '350px' }}>
                        <Card style={{ width: '25rem'}}>
                            <img src="./images/fyp.PNG" alt='kjh' height={180} />
                            <CardBody>
                                <CardTitle style={{fontWeight: 'bold'}}>Final Year Project</CardTitle>
                                <CardText>Education Testing system built using mern stack, next js, redux, tailwind css</CardText>
                                {/* <Button variant='primary'>Check</Button> */}
                                <button type="button" class="btn btn-outline-primary">Check</button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" style={{ display: 'flex', justifyContent: 'center', height: '350px' }}>
                        <Card style={{ width: '25rem' }}>
                            <img src="./images/weather.png" alt='jhg' height={180} />
                            <CardBody>
                                <CardTitle style={{fontWeight: 'bold'}}>Weather app</CardTitle>
                                <CardText>It is a pwa weather app built using HTML, CSS, Javascript, and openweatherapi</CardText>
                                <button type="button" class="btn btn-outline-primary">Check</button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-3 g-5'>
                    <Col md="6" style={{ display: 'flex', justifyContent: 'center', height: '350px' }}>
                        <Card style={{ width: '25rem' }}>
                            <img src="./images/portfolio.png" alt='jhg' height={200} />
                            <CardBody>
                                <CardTitle style={{fontWeight: 'bold'}}>Portfolio Website</CardTitle>
                                <CardText>It is built using React JS, Bootstrap, Firebass</CardText>
                                <button type="button" class="btn btn-outline-primary">Check</button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" style={{ display: 'flex', justifyContent: 'center', height: '350px' }}>
                        <Card style={{ width: '25rem' }}>
                            <img src="./images/netflix.png" alt='hjgjhg' height={200} />
                            <CardBody>
                                <CardTitle style={{fontWeight: 'bold'}}>Mini Netflix Clone</CardTitle>
                                <CardText>It is built using react js and bootstrap</CardText>
                                <button type="button" class="btn btn-outline-primary">Check</button>
                            </CardBody>
                        </Card>
                    </Col>
                    
                </Row>

            </div>
        </>
    )
}
