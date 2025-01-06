import React from 'react';
import { useParams } from 'react-router-dom';
import MainAppBar from "../components/MainAppBar";
import PracticalTask from "./PracticalTask";

function LevelPage() {
    const { levelId } = useParams();

    return (
        <div>
            <MainAppBar />

            <h1>Level {levelId}</h1>
            <PracticalTask />
            {/* W przyszłości pobierzesz dane o poziomie z backendu, bazując na levelId */}
        </div>
    );
}

export default LevelPage;
