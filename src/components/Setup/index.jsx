import React, { Fragment } from 'react'
import Description from '../../shared/Description'
import Title from '../../shared/Title'
import mockData from './mockData'

const Index = () => {
    return (
        <>
            <Title>Ready, set, trade</Title>
            {mockData.map(({ title, description, image }, index) => {
                return (
                    <Fragment key={index}>
                        <Title>{title}</Title>
                        <div>
                            {description.map((d, i) => <Description key={i}>{d}</Description>)}
                        </div>
                        {image}
                    </Fragment>
                )
            })}
            <p>Setup an account and start trading in less than 5 minutes.</p>
        </>
    )
}

export default Index