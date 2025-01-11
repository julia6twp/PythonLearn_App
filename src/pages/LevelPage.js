import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainAppBar from "../components/MainAppBar";
import PracticalTask from "./PracticalTask";

function LevelPage() {
    const { levelId } = useParams();
    const [levelData, setLevelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLevelDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/get-level-details/beginner/${levelId}/`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setLevelData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLevelDetails();
    }, [levelId]);

    if (loading) {
        return (
            <div>
                <MainAppBar />
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <MainAppBar />
                <h1>Error: {error}</h1>
                <PracticalTask />
            </div>
        );
    }

    return (
        <div>
            <MainAppBar />

            <h1>Level {levelData.level}</h1>
            <p><strong>Task:</strong> {levelData.task}</p>
            {/*<p><strong>Answer:</strong> {levelData.answer}</p>*/}
            <PracticalTask difficulty="beginner" level={levelId} />

        </div>
    );
}

export default LevelPage;
