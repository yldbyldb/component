import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2rem 0',
        },
        paper: {
            marginRight: theme.spacing(0),
            borderRadius: '1rem',
        },
        table: {
            minWidth: 250,
            padding: '1rem 1rem',
            margin: '1rem 1rem'
        },
        tableCell: {
            border: 'none',
            padding: '1rem 0.5rem',
            '& div': {
                display: 'inline-block',
                backgroundColor: 'rgb(219,242,253)',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                position: 'relative',
                '& span': {
                    position: 'relative',
                    top: '0.6rem',
                    color: 'white',
                }
            }
        },
    }));



//These numbers come from database, which are the number of suburb in certain price range.
const areaItem = [51, 11, 1, 22, 53];
const priceRangeItem = ['价格分档1', '价格分档2', '价格分档3', '价格分档4', '价格分档5'];
const colorItem = ['rgb(219,242,253)', 'rgb(129,209,246)', 'rgb(85,152,214)', 'rgb(53,101,169)', 'rgb(36,82,147)']

const rows = priceRangeItem.map((price: string, i: number) => ({ price, area: areaItem[i], color: colorItem[i] }));
console.log(rows);

export default function BasicTable() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableCell} align="center">区域</TableCell>
                                <TableCell className={classes.tableCell} align="center">别墅中位价</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.area}>
                                    <TableCell className={classes.tableCell} align="center" component="th" scope="row">
                                        <div style={{backgroundColor:`${row.color}`}}>
                                            <span>{row.area}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}