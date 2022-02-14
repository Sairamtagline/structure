import React from 'react'
import { Form as Frm } from 'react-bootstrap'
import Button from './Button'

const Form = () => {
  return (
    <Frm>
      <Frm.Group className="trading-form">
        <Frm.Select aria-label="Default select example">
          <option>US +1</option>
          <option value="1">AU +43</option>
          <option value="1">RU +7</option>
          <option value="2">SW +46</option>
        </Frm.Select>
        <Frm.Control type="text" placeholder="Enter your phone number" />
        <Button variant="primary" type="submit">
          Send link
        </Button>
      </Frm.Group>
    </Frm>
  )
}

export default React.memo(Form)