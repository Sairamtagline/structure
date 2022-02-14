import React from 'react'
import { ReactComponent as SVG6 } from '../images/Ellipse6.svg'
const Card = ({ mockData = [] }) => {
    return (
        mockData.map(({
            name,
            price,
            percentage,
            percentageArrow,
            image
        }, index) => {
            return (
                <div key={index}>
                    {name}
                    {price}
                    {percentage}
                    {percentageArrow}
                    {image || <SVG6 />}
                </div>
            )
        })
    )
}

export default Card