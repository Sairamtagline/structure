import React from 'react'
import { ReactComponent as SVG6 } from '../images/Ellipse6.svg'
import { ReactComponent as UpArrow } from '../images/UpArrow.svg'
import { ReactComponent as DownArrow } from '../images/DownArrow.svg'
const Card = ({ mockData = [] }) => {
    return (
        <div className='stock-wrap'>
            {
                mockData.map(({
                    name,
                    price,
                    percentage,
                    percentageArrow,
                    image
                }, index) => {
                    return (
                        <div key={index} className="stock-col">
                            <div key={index} className="stock-box">
                                <div className='stock-icon'>
                                    {image ? <img src={image} alt='img' /> : <SVG6 />}
                                </div>
                                <div className='stock-info'>
                                    <div className='stock-title-price'>
                                        <h5>{name}</h5>
                                        <span>{price}</span>
                                    </div>
                                    <div className='stock-percentage'>
                                        {percentageArrow === 'up' ? <UpArrow /> : <DownArrow />}
                                        {percentage}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card