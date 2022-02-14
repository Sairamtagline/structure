import React from 'react'
import Description from '../../shared/Description'
import Form from '../../shared/Form'
import Title from '../../shared/Title'

const Options = () => {
  return (
    <div className='pb-4'>

      <Title>
        Fractional options are the future
      </Title>
      <Description>
        In the future, Structure will allow its users to buy and sell fractions of options.
      </Description>
      <Form select={false} btnValue="Subscribe" placeholder="Enter email to stay up to date" />
    </div>
  )
}

export default Options