import React from 'react'
import ClaimSpot from "../components/ClaimSpot";
import Features from "../components/Features";
import MainContent from "../components/MainContent";
import Setup from "../components/Setup";
import Assured from "../components/Assured";
import Connecting from "../components/Connecting";
import Subscribe from '../components/Subscribe';
import AllAssets from '../components/AllAssets';

const Home = () => {
    return (
        <>
            <MainContent />
            <AllAssets />
            <ClaimSpot />
            <Features />
            <Setup />
            <Assured />
            <Connecting />
            <Subscribe />
        </>
    )
}

export default React.memo(Home)