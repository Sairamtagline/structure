import React from 'react'
import Description from '../../shared/Description'
import Form from '../../shared/Form'

const Options = () => {
  return (
    <div className='options-wrap'>
      <div className='options-info'>
        <h4>
          Fractional options are the future
        </h4>
        <Description>
          In the future, Structure will allow its users to buy and sell fractions of options.
        </Description>
      </div>
      <Form select={false} btnValue="Subscribe" placeholder="Enter email to stay up to date" />
    </div>
  )
}

export default Options