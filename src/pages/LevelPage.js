import React from 'react';
import { useParams } from 'react-router-dom';

function LevelPage() {
    const { levelId } = useParams();

    return (
        <div>
            <h1>Level {levelId}</h1>
            <p>Here, you will see the content for level {levelId}.</p>
            {/* W przyszłości pobierzesz dane o poziomie z backendu, bazując na levelId */}
        </div>
    );
}

export default LevelPage;
