import React from 'react'
import Card from '../../shared/Card'

const mockData = [
    {
        name: "OMG Network",
        price: "$13.00",
        percentage: "27.5%",
        percentageArrow: "down",
    },
    {
        name: "Yearn Classic Finance",
        price: "$20.19",
        percentage: "109.3%",
        percentageArrow: "up",
    },
    {
        name: "Bridge Mutual",
        price: "$0.4448",
        percentage: "21.4%",
        percentageArrow: "down",
    },
    {
        name: "Decentraland",
        price: "$3.12",
        percentage: "27.1%",
        percentageArrow: "up",
    },
    {
        name: "Polkarare",
        price: "$0.1579",
        percentage: "10.6%",
        percentageArrow: "down",
    },
    {
        name: "SHIBA INUk",
        price: "$0.00005225",
        percentage: "21.4%",
        percentageArrow: "up",
    },
]
const Crypto = () => <Card {...{ mockData }} />

export default Crypto