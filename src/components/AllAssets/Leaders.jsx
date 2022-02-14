import React from 'react'
import { ReactComponent as SVG } from '../../images/Ellipse.svg'
import { ReactComponent as SVG1 } from '../../images/Ellipse1.svg'
import { ReactComponent as SVG2 } from '../../images/Ellipse2.svg'
import { ReactComponent as SVG3 } from '../../images/Ellipse3.svg'
import { ReactComponent as SVG4 } from '../../images/Ellipse4.svg'
import { ReactComponent as SVG5 } from '../../images/Ellipse5.svg'
import Card from '../../shared/Card'

const mockData = [
    {
        name: "Yearn Classic Finance",
        price: "$20.19",
        percentage: "109.3%",
        percentageArrow: "up",
        image: <SVG />
    },
    {
        name: "Decentraland",
        price: "$3.12",
        percentage: "27.1%",
        percentageArrow: "up",
        image: <SVG1 />,
    },
    {
        name: "SHIBA INUk",
        price: "$0.00005225",
        percentage: "21.4%",
        percentageArrow: "up",
        image: <SVG2 />,
    },
    {
        name: "Avalanche",
        price: "$83.31",
        percentage: "22.3%",
        percentageArrow: "up",
        image: <SVG3 />,
    },
    {
        name: "Internet Computer",
        price: "$46.03",
        percentage: "16.4%",
        percentageArrow: "up",
        image: <SVG4 />,
    },
    {
        name: "Cosmos",
        price: "$31.84",
        percentage: "12.0%",
        percentageArrow: "up",
        image: <SVG5 />,
    },
]
const Leaders = () => <Card {...{ mockData }} />

export default Leaders