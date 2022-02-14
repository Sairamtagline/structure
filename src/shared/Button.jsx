import React from 'react'
import { Button as Btn } from 'react-bootstrap'


const Button = ({ children }) => {
    return (
        <Btn>{children}</Btn>
    )
}

export default React.memo(Button)