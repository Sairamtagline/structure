import React from 'react'
import { Container as Ctr } from "react-bootstrap";

const Container = ({ children, extraClass }) => (
    <div className={"section " + extraClass}>
        <Ctr>{children}</Ctr>
    </div>
)


export default Container