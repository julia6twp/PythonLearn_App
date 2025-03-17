// src/pages/Tasks.js
import React from 'react';
import MainAppBar from '../components/MainAppBar';
import HomeCards from "../components/HomeCards";
import TasksCards from "../components/TasksCards";

function Tasks() {
    return (
        <div>
            <MainAppBar />
            <TasksCards />
        </div>
    );
}

export default Tasks;