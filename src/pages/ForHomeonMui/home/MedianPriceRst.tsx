import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { create, rst, stateS } from 'rt-state';

const columns = [
    { id: 'ranking', label: 'Ranking', minWidth: '5rem' },
    { id: 'suburb', label: 'Suburb', minWidth: '7rem' },
    {
        id: 'medianPriceOfHouse',
        label: 'Median Price of House',
        minWidth: '10rem',
        align: 'right',
        format: (value: number) =>
            value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }),
    },
];

function createData(ranking: number, suburb: string, medianPriceOfHouse: number) {
    return { ranking, suburb, medianPriceOfHouse };
}

const rows = [
    createData(1, 'IN', 1324171354),
    createData(2, 'CN', 1403500365),
    createData(3, 'IT', 60483973),
    createData(4, 'US', 327167434),
    createData(5, 'CA', 37602103),
    createData(6, 'AU', 25475400),
    createData(7, 'DE', 83019200),
    createData(8, 'IE', 4857000),
    createData(9, 'MX', 126577691),
    createData(10, 'JP', 126317000),
    createData(11, 'FR', 67022000),
    createData(12, 'GB', 67545757),
    createData(13, 'RU', 146793744),
    createData(14, 'NG', 200962417),
    createData(15, 'BR', 210147125),
];

const useStyles = makeStyles({
    root: {
        width: '50%',
        alignItems: 'center',
        margin: '0 auto',
    },
    header: {
        fontSize: '2.5rem',
        paddingTop: '1rem',
        paddingLeft: '1rem',
        color: 'rgb(36 100 236)',
        textAlign: 'left',
    },
    container: {
        maxHeight: '50rem',
    },
    tableHead: {
        fontWeight: 300,
        backgroundColor: 'white',
    },
    tableCell: {
        fontSize: '1rem',
    },
    // button: {
    //     alignItems: 'center'
    // },
});

export const MedianPriceRst = create((ctx) => {
    const state = stateS({ page: 0, rowsPerPage: 10, isMore: false });

    function handleChangePage(event: any, newPage: number) {
        state.value.page = newPage;
        state.forceUpdate();
    }

    function handleChangeRowsPerPage(event: any) {
        const { value: data } = state;
        data.rowsPerPage = event.target.value;
        data.page = 0;
        state.forceUpdate();
    }

    function handleChangeMore() {
        const { value: data } = state;
        data.isMore = false;
        data.page = 0;
        state.forceUpdate();
    }

    function handleChangeLess() {
        const { value: data } = state;
        data.isMore = true;
        data.page = 0;
        state.forceUpdate();
    }

    return (props) => {
        const classes = useStyles();
        const { value: data } = state;

        return (
            <Paper className={classes.root} elevation={0}>
                <h1 className={classes.header}>Median Price Rst</h1>
                <TableContainer className={classes.container}>
                    <Table stickyHeader size="medium" aria-label="sticky table">
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                {columns.map((column: any) => (
                                    <TableCell
                                        className={classes.tableCell}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(data.isMore
                                ? rows.slice(
                                      data.page * data.rowsPerPage,
                                      data.page * data.rowsPerPage + data.rowsPerPage,
                                  )
                                : rows.slice(0, 7)
                            ).map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column: any) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    className={classes.tableCell}
                                                    key={column.id}
                                                    align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {data.isMore ? (
                    <>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={data.rowsPerPage}
                            page={data.page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                        <Box textAlign="center">
                            <Button variant="text" color="primary" size="large" onClick={handleChangeMore}>
                                Show less
                                <ArrowDropUpIcon />
                            </Button>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box textAlign="center">
                            <Button variant="text" color="primary" size="large" onClick={handleChangeLess}>
                                Show more
                                <ArrowDropDownIcon />
                            </Button>
                        </Box>
                    </>
                )}
            </Paper>
        );
    };
});
