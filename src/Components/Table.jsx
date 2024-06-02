import React, { useState } from 'react';
import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    table: {
        width: '100%',
        border: '1px solid #ddd', // Border for the entire table
        borderCollapse: 'collapse', // Collapse borders into a single border
    },
    container: {
        height: 'auto',
        maxHeight: 'calc(100vh - 200px)', // Adjust max height to fit the screen
        overflowY: 'auto', // Add vertical scrolling
    },
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#f2f2f2', // Header background color
    },
    headCell: {
        color: 'white', // White text color for head cells
        backgroundColor: 'maroon',
        border: '1px solid #ddd', // Border for header cells
        padding: '8px',
    },
    cell: {
        border: '1px solid #ddd', // Border for table cells
        padding: '8px',
    },
});

const createData = (id, name, orgGroup, initiator, workPlan) => {
    return { id, name, orgGroup, initiator, workPlan };
};

const generateEntries = () => {
    return [
        createData('DP1', 'High speed endurance test', 'TR-020-Testrigs', 'M0001', ''),
        createData('DP1', 'High speed endurance test', 'TR-020-Testrigs', 'S000150103032904', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DP1', 'High speed endurance test', 'TR-020-Testrigs', 'S000160103032904', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('SRV', 'Scuffing resistance', 'TR-020-Testrigs', 'M0004', ''),
        createData('SRV', 'Scuffing resistance', 'TR-020-Testrigs', 'S000450103032904', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('SRV', 'Scuffing resistance', 'TR-020-Testrigs', 'S000460103032904', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DP2_DUROP', 'Dyno load test / Durability of Rotating Parts', 'TR-020-Testrigs', 'M0002', ''),
        createData('DP2_DUROP', 'Dyno load test / Durability of Rotating Parts', 'TR-020-Testrigs', 'S000250103032904', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DP2_DUROP', 'Dyno load test / Durability of Rotating Parts', 'TR-020-Testrigs', 'S000260103032904', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF6', 'Full throttle acceleration', 'TR-020-Testrigs', 'M0009', ''),
        createData('DF6', 'Full throttle acceleration', 'TR-020-Testrigs', 'S000950103032704', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF6', 'Full throttle acceleration', 'TR-020-Testrigs', 'S000950128032704', 'PFG-010_Vehicle Testing - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF6', 'Full throttle acceleration', 'TR-020-Testrigs', 'S000960103032704', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF6', 'Full throttle acceleration', 'TR-020-Testrigs', 'S000960128032704', 'PFG-010_Vehicle Testing - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF6_Track', 'Testtrack for - DF6', 'TR-020-Testrigs', 'M1902', ''),
        createData('DF6_Track', 'Testtrack for - DF6', 'TR-020-Testrigs', 'R1902501xxxxx708', ''),
        createData('DF6_Track', 'Testtrack for - DF6', 'TR-020-Testrigs', 'R1902601xxxxx708', ''),
        createData('DF10', 'Differential test', 'TR-020-Testrigs', 'M0124', ''),
        createData('DF10', 'Differential test', 'TR-020-Testrigs', 'S012450103032704', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF10', 'Differential test', 'TR-020-Testrigs', 'S012450128032704', 'PFG-010_Vehicle Testing - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF10', 'Differential test', 'TR-020-Testrigs', 'S012460103032704', 'BB-000_Product Line Verification - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF10', 'Differential test', 'TR-020-Testrigs', 'S012460128032704', 'PFG-010_Vehicle Testing - BB-010_New gear set (gears/FD/ratio)'),
        createData('DF10_Track', 'Testtrack for - Differential test', 'TR-020-Testrigs', 'M1904', ''),
        createData('DF10_Track', 'Testtrack for - Differential test', 'TR-020-Testrigs', 'R1904501xxxxx708', ''),
        createData('DF10_Track', 'Testtrack for - Differential test', 'TR-020-Testrigs', 'R1904601xxxxx708', ''),
    ];
};

const Table = () => {
    const classes = useStyles();
    const [rows] = useState(generateEntries());
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TableContainer className={classes.container}>
                <MuiTable stickyHeader className={classes.table}>
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headCell}>ID</TableCell>
                            <TableCell className={classes.headCell}>Name</TableCell>
                            <TableCell className={classes.headCell}>Organization Group</TableCell>
                            <TableCell className={classes.headCell}>Initiator</TableCell>
                            <TableCell className={classes.headCell}>Work Plan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.cell}>{row.id}</TableCell>
                                <TableCell className={classes.cell}>{row.name}</TableCell>
                                <TableCell className={classes.cell}>{row.orgGroup}</TableCell>
                                <TableCell className={classes.cell}>{row.initiator}</TableCell>
                                <TableCell className={classes.cell}>{row.workPlan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default Table;
