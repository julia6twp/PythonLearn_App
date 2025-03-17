import React from 'react';
import MainAppBar from '../components/MainAppBar';
import CustomizedTables from "../components/CustomizedTables";

function Ranking() {
    return (
        <div>
            <MainAppBar />
            <div style={{ padding: '80px 300px' }}>
                <CustomizedTables />
            </div>
        </div>
    );
}

export default Ranking;
