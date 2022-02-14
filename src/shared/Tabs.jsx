import React, { useState } from 'react'
import { Tab, Tabs as Tb } from 'react-bootstrap'

const Tabs = ({ defaultKey, tabs }) => {
    const [key, setKey] = useState(defaultKey);
    return (
        <Tb
            defaultActiveKey={defaultKey}
            id="controlled-tab-example"
            className="mb-3"
            activeKey={key}
            onSelect={(k) => setKey(k)}

        >
            {
                Object.keys(tabs).map((key, index) => {
                    return (<Tab.Container eventKey={key} title={key} key={index} />)
                })
            }
            <Tab.Container eventKey={key}>
                {tabs[key]}
            </Tab.Container>
        </Tb>
    )
}

export default React.memo(Tabs)