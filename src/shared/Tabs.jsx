import React from 'react'
import { Tab, Tabs as Tb } from 'react-bootstrap'

const Tabs = () => {
    return (
        <Tb defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
            </Tab>
            <Tab eventKey="profile" title="Profile">
            </Tab>
        </Tb>
    )
}

export default Tabs