import React from 'react'
import { Button as Btn } from 'react-bootstrap'


const Button = ({ children, ...props }) => {
    return (
        <Btn {...props}>{children}</Btn>
    )
}

export default React.memo(Button)