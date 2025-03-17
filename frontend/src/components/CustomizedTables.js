import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, name, points) {
    return { id, name, points };
}


const rows = [
    createData(1, "BladeRunner2049", 15),
    createData(2, "IronMan3", 15),
    createData(3, "JohnWick2", 14),
    createData(4, "Shrek214", 13),
    createData(5, "StarWars7", 12),
    createData(6, "Matrix3", 12),
    createData(7, "Avenger2213", 11),
    createData(8, "Fast5", 10),
    createData(9, "MissionImpossible6", 8),
    createData(10, "Transformers4", 6),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" sx={{ width: '50px' }}>ID</StyledTableCell>
                        <StyledTableCell align="center" sx={{ minWidth: '150px' }}>Nick</StyledTableCell>
                        <StyledTableCell aalign="center" sx={{ width: '100px' }}>Achievements</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.points}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
