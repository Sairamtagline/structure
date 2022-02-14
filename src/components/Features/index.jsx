import React, { Fragment } from 'react'
import Button from '../../shared/Button'
import Description from '../../shared/Description'
import Title from '../../shared/Title'
import mockData from './mockData'

const Index = () => {
    return (
        <div>
            {mockData.map(({ title, description, button, image }, index) => {
                return (
                    <Fragment key={index}>
                        <Title>{title}</Title>
                        <div>
                            {description.map((d, i) => <Description key={i}>{d}</Description>)}
                        </div>
                        <Button>{button}</Button>
                        {image}
                    </Fragment>
                )
            })}</div>
    )
}

export default Index