import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem 0',
        },
        paper: {
            marginRight: theme.spacing(0),
            borderRadius: '1rem',
            margin: '1rem 0',
            width: '20rem',
            padding: '1rem 0',
            textAlign:'center'
        },
        head: {
            padding: '2rem 0',
            flexGrow: 1,
        },
        body: {
            flexGrow: 1,
            padding: '0 0 1rem 0',

        },
        cell: {
            '& h3':{
                padding:'0',
                margin:'0',
            },
            '& div': {
                display: 'inline-block',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                
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
                <div className={classes.head}>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={5}>
                        <Grid item xs={4}  className={classes.cell}>
                            <h3>区域</h3>
                        </Grid>
                        <Grid item xs={5}  className={classes.cell}>
                            <h3>别墅中位价</h3>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.body}>
                    {rows.map((row) => (
                        <Grid container direction="row"
                            justify="center"
                            alignItems="center" spacing={4} key={row.area}>
                            <Grid item xs={4} className={classes.cell}>
                                <div style={{ backgroundColor: `${row.color}` }}>
                                    <span>{row.area}</span>
                                </div>
                            </Grid>
                            <Grid item xs={5} className={classes.cell}>
                                <span>{row.price}</span>
                            </Grid>
                        </Grid>
                    ))}
                </div>
            </Paper>
        </div>
    );
}