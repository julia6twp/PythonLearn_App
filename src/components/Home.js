import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <p>This is the main page of the application. Choose an option below:</p>
            <Link to="/about">Go to About</Link>
            <Link to="/beginner">Go to Beginner Page</Link>
        </div>
    );
}

export default Home;