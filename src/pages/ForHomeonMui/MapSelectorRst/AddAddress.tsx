import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    // borderRadius:'1rem'
  },
  input: {
    marginLeft: 28,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  
});

export default function AddAddress() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="请输入地址"
        inputProps={{ 'aria-label': 'Add address' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
