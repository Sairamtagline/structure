import React from 'react'
import ClaimSpot from "../components/ClaimSpot";
import Features from "../components/Features";
import MainContent from "../components/MainContent";
import Setup from "../components/Setup";
import Assured from "../components/Assured";
import Connecting from "../components/Connecting";

const Home = () => {
    return (
        <>
            <MainContent />
            <ClaimSpot />
            <Features />
            <Setup />
            <Assured />
            <Connecting />
        </>
    )
}

export default React.memo(Home)