import React from 'react';
import { useParams } from 'react-router-dom';

function LevelPage() {
    const { levelId } = useParams();

    return (
        <div>
            <h1>Level {levelId}</h1>
            <p>Content for level {levelId}.</p>
            {/* W przyszłości pobierzesz dane o poziomie z backendu, bazując na levelId */}
        </div>
    );
}

export default LevelPage;
