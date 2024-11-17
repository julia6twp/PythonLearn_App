// src/components/AchievementsList.js

import React from 'react';
import AchievementCard from './AchievementCard';
import Box from '@mui/material/Box';

// MUI icons
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

export default function AchievementsList() {
    // Przykładowe osiągnięcia
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
            description: 'First time entering a letter into the console.',
            IconComponent: KeyboardIcon,
            isAchieved: false,
        },
        {
            id: 7,
            title: 'Time to use the library!',
            description: 'Include the library for the first time',
            IconComponent: LocalLibraryIcon,
            isAchieved: false,
        },
        {
            id: 8,
            title: 'Beginnings are difficult ',
            description: 'Three bad compilations in one task.',
            IconComponent: StairsIcon,
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
            isAchieved: false,
        },
        {
            id: 12,
            title: 'It works!',
            description: 'Build your first neural network)',
            IconComponent: PsychologyIcon,
            isAchieved: false,
        },
        {
            id: 13,
            title: 'Code It!',
            description: 'Compile Your Code for the First Time.',
            IconComponent: CodeIcon,
            isAchieved: false,
        },
        {
            id: 14,
            title: 'There is a bug here!',
            description: 'Incorrect result.',
            IconComponent: PestControlIcon,
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
                gap: 4, // Odstępy między kartami
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
