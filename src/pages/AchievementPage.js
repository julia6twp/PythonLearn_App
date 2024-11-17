// src/pages/AchievementsPage.js

import React from 'react';
import AchievementsList from '../components/AchievementsList';
import MainAppBar from "../components/MainAppBar";

function AchievementsPage() {
    return (
        <div>
            <MainAppBar />
            <AchievementsList />
        </div>
    );
}

export default AchievementsPage;
