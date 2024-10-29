import React from 'react';
import { Link } from 'react-router-dom';

// Stona z quizami, samouczkami, zadaniami praktycznymi dla początkująych

function BeginnerPage() {
    return (
        <div>
            <h1>Beginner Page</h1>
            <p>Choose an option to continue:</p>

            <Link to="/quiz">Go to Quiz</Link>
            <br />
            <Link to="/practical-task">Go to Practical Task</Link>
        </div>
    );
}

export default BeginnerPage;