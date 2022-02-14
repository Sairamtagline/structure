import React from 'react'
import Description from '../../shared/Description'
import Title from '../../shared/Title'
import container from '../../images/container.png'
import Button from '../../shared/Button'
import { Col, Row } from 'react-bootstrap'
import Container from '../../shared/Container'

const Index = () => {
    return (
            <Container extraClass="pt-small pb-0">
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <img className='connecting-img' src={container} alt="container" />
                    </Col>
                    <Col lg={6}>
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
    )
}

export default Index