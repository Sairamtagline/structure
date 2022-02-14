import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Description from '../../shared/Description'
import { footerDescriptionOne, footerDescriptionTwo } from './mockData'

const ColumnDescription = () => {
    return (
        <Row className="footer-desc">
            <Col md={6}>
                {footerDescriptionOne.map(d => <Description key={d}>{d}</Description>)}
            </Col>
            <Col md={6}>
                {footerDescriptionTwo.map(d => <Description key={d}>{d}</Description>)}
            </Col>
        </Row>
    )
}

export default ColumnDescription