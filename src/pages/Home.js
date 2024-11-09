// src/pages/Home.js
import React from 'react';
import MainAppBar from '../components/MainAppBar';
import HomeCards from "../components/HomeCards";

function Home() {
    return (
        <div>
            <MainAppBar />
            <HomeCards />
        </div>
    );
}

export default Home;