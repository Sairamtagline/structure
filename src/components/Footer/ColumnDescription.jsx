import React from 'react'
import Description from '../../shared/Description'
import { footerDescriptionOne, footerDescriptionTwo } from './mockData'

const ColumnDescription = () => {
    return (
        <>
            {footerDescriptionOne.map(d => <Description key={d}>{d}</Description>)}
            {footerDescriptionTwo.map(d => <Description key={d}>{d}</Description>)}
        </>
    )
}

export default ColumnDescription