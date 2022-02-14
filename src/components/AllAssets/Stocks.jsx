import React from 'react'
import Card from '../../shared/Card'

const mockData = [
    {
        name: "D-Market Electronic...",
        price: "$3.65",
        percentage: "33.8%",
        percentageArrow: "down",
    },
    {
        name: "Kura Sushi",
        price: "$70.70",
        percentage: "27.3%",
        percentageArrow: "up",
    },
    {
        name: "F45 Training",
        price: "$3.14",
        percentage: "22.4%",
        percentageArrow: "down",
    },
    {
        name: "Xponential Fitness",
        price: "$23.66",
        percentage: "22.6%",
        percentageArrow: "up",
    },
    {
        name: "Jamf",
        price: "$31.95",
        percentage: "21.2%",
        percentageArrow: "down",
    },
    {
        name: "PLAYSTUDIOS",
        price: "$4.82",
        percentage: "20.5%",
        percentageArrow: "up",
    },
]

const Stocks = () => <Card {...{ mockData }} />

export default Stocks