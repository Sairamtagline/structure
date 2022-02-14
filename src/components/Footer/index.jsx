import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ColumnDescription from './ColumnDescription'

import Points from './Points'
import Socials from './Socials'

const Index = () => {
    return (

        <footer>
            <Container>
                <Row>
                    <Col md={12}>
                        <Socials />
                        <Points />
                        <ColumnDescription />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Index