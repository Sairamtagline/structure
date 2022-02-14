import React from 'react'
import { Form as Frm } from 'react-bootstrap'
import Button from './Button'

const Form = () => {
  return (
    <Frm>
      <Frm.Group className="mb-3" controlId="formBasicEmail">
        <Frm.Label>Email address</Frm.Label>
        <Frm.Control type="email" placeholder="Enter email" />
        <Frm.Text className="text-muted">
          We'll never share your email with anyone else.
        </Frm.Text>
      </Frm.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Frm>
  )
}

export default React.memo(Form)