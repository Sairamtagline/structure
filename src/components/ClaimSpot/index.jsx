import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../../shared/Button'
import CoinOne from '../../images/CoinOne.svg'
import CoinTwo from '../../images/CoinTwo.svg'
import CoinThree from '../../images/CoinThree.svg'
import CoinFour from '../../images/CoinFour.svg'
import Container from '../../shared/Container'

const ClaimSpot = () => {
    return (
        <Container extraClass="pb-small">
            <Row className='justify-content-center'>
                <Col xl={9}>
                    <div className='clam-spot'>
                        <Row className='align-items-center'>
                            <Col lg={6} md={7}>
                                <div className='clam-spot-info'>
                                    <h4>Sign up and get no-fee trading for life</h4>
                                    <p>We’re giving our first 5,000 users lifetime access to totally free trading.</p>
                                </div>
                            </Col>
                            <Col lg={5} md={5} className="offset-lg-1">
                                <div className='clam-spot-left'>
                                    <h6>Spots left</h6>
                                    <h3>2,631</h3>
                                    <Button variant="primary">Claim your spot</Button>
                                </div>
                            </Col>
                        </Row>
                        <div className='coin-wrap'>
                            <span className='coin-one'><img src={CoinOne} alt="" /></span>
                            <span className='coin-two'><img src={CoinTwo} alt="" /></span>
                            <span className='coin-three'><img src={CoinThree} alt="" /></span>
                            <span className='coin-four'><img src={CoinFour} alt="" /></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ClaimSpot