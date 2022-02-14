import React from 'react'
import { ReactComponent as SVG } from '../../images/Group1.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { Check2 } from 'react-bootstrap-icons'

const Index = () => {
    return (
        <div className='section pt-small pb-small'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='assured-wrap'>
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <div className='assured-info'>
                                        <h3>Rest assured, you’re in <br className='d-none d-md-block'/> good hands</h3>
                                        <ul>
                                            <li><Check2/> Assigned ownership of your coins</li>
                                            <li><Check2/> Cutting edge security</li>
                                            <li><Check2/> Digital assets backed by real world assets<sup>2</sup></li>
                                            <li><Check2/> Crime prevention and good-faith policy <sup>3</sup></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='assured-img'>
                                        <SVG />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index