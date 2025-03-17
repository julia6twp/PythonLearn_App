// src/components/AchievementsList.js

import React from 'react';
import AchievementCard from './AchievementCard';
import Box from '@mui/material/Box';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StairsIcon from '@mui/icons-material/Stairs';
import LandscapeIcon from '@mui/icons-material/Landscape';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import ListIcon from '@mui/icons-material/List';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import PestControlIcon from '@mui/icons-material/PestControl';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import PanToolIcon from '@mui/icons-material/PanTool';
import FunctionsIcon from '@mui/icons-material/Functions';
export default function AchievementsList() {

    const achievements = [
        {
            id: 1,
            title: 'Best of the Best',
            description: 'Complete all levels.',
            IconComponent: EmojiEventsIcon,
            isAchieved: false, //nie zdobyte
        },
        {
            id: 2,
            title: 'The first step is behind you',
            description: 'Complete your first level.',
            IconComponent: MilitaryTechIcon,
            isAchieved: true, //zdobyte
        },
        {
            id: 3,
            title: 'Keep it up!!',
            description: 'Complete all beginner levels.',
            IconComponent: ArrowForwardIcon,
            isAchieved: false,
        },
        {
            id: 4,
            title: 'Architect',
            description: 'Complete all levels in Intermediate.',
            IconComponent: ArchitectureIcon,
            isAchieved: false,
        },
        {
            id: 5,
            title: 'My first file',
            description: 'First reading of data from a file.',
            IconComponent: FileOpenIcon,
            isAchieved: false,
        },
        {
            id: 6,
            title: 'QWERTY',
            description: 'Using the input() function for the first time.',
            IconComponent: KeyboardIcon,
            isAchieved: true,
        },
        {
            id: 7,
            title: 'Time to use the library!',
            description: 'Include the library for the first time.',
            IconComponent: LocalLibraryIcon,
            isAchieved: true,
        },
        {
            id: 8,
            title: 'Code Ninja',
            description: 'Write 30 lines of clean, functional code.',
            IconComponent: PanToolIcon,
            isAchieved: false,
        },
        {
            id: 9,
            title: 'Be all downhill',
            description: 'Complete 5 beginner levels.',
            IconComponent: LandscapeIcon,
            isAchieved: false,
        },
        {
            id: 10,
            title: 'Time to sleep',
            description: 'Use the sleep() function.',
            IconComponent: BedtimeIcon,
            isAchieved: false,
        },
        {
            id: 11,
            title: 'List it !!!',
            description: 'Use list for the first time.',
            IconComponent: ListIcon,
            isAchieved: true,
        },
        {
            id: 12,
            title: 'It works!',
            description: 'Build your first neural network.',
            IconComponent: PsychologyIcon,
            isAchieved: false,
        },
        {
            id: 13,
            title: 'Code It!',
            description: 'Compile Your Code for the First Time.',
            IconComponent: CodeIcon,
            isAchieved: true,
        },
        {
            id: 14,
            title: 'Algorithm Master',
            description: 'Implement your first sorting algorithm',
            IconComponent: FunctionsIcon,
            isAchieved: false,
        },
        {
            id: 15,
            title: 'The end or a new beginning?',
            description: 'Complete the first quiz.',
            IconComponent: SportsScoreIcon,
            isAchieved: false,
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 4,
                padding: 4,
            }}
        >
            {achievements.map((achievement) => (
                <AchievementCard
                    key={achievement.id}
                    title={achievement.title}
                    description={achievement.description}
                    IconComponent={achievement.IconComponent}
                    isAchieved={achievement.isAchieved}
                />
            ))}
        </Box>
    );
}
