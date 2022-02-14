import React from 'react'
import Description from '../../shared/Description'
import Title from '../../shared/Title'
import container from '../../images/container.png'
import Button from '../../shared/Button'
import { Col, Container, Row } from 'react-bootstrap'

const Index = () => {
    return (
        <div className='section pt-small'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img className='w-100' src={container} alt="container" />
                    </Col>
                    <Col md={6}>
                        <div className='connection-info'>
                            <Title>Connecting the world of assets</Title>
                            <Description>
                                Structure was created to give people around the world access to the same investment assets.  We’re on a mission to empower investors of all types through secure and easy-to-use  financial tools.
                            </Description>
                            <Description>
                                Interested in helping us build the future of finance? Checkout our careers page to get started.
                            </Description>
                            <Button>View open positions</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index