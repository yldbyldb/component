import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { Paper } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Landmark from './Landmark';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddAddress from './AddAddress';
import Favorite from './Favorite';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2rem 0',
        },
        paper: {
            marginRight: theme.spacing(2),
            borderRadius: '1rem',
        },
        menuList: {
            margin: '0'
        },
        menuItem: {
            margin: '0.5rem 0rem',
            padding: '0.5rem 0.5rem 0.5rem 1rem',
            justifyContent: 'space-around',

            '& span':
            {
                padding: '0 0.8rem'
            }
        },
        popover: {
            margin: '-1rem 0 0 1rem',
            // borderRadius: '1rem',
        },
        button: {
            margin: '0.5rem  1rem ',
        },
        typography: {
            padding: theme.spacing(4),
        },
    }),
);

export default function SimplePopover() {
    const classes = useStyles();

    const [anchorElLandmark, setAnchorElLandmark] = React.useState<HTMLElement | null>(null);
    function handleClickLandmark(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        setAnchorElLandmark(event.currentTarget);
    }
    function handleCloseLandmark() {
        setAnchorElLandmark(null);
    }
    const openLandmark = Boolean(anchorElLandmark);
    const idLandmark = openLandmark ? 'simple-popover' : undefined;


    const [anchorElAddress, setAnchorElAddress] = React.useState<HTMLElement | null>(null);
    function handleClickAddress(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        setAnchorElAddress(event.currentTarget);
    }
    function handleCloseAddress() {
        setAnchorElAddress(null);
    }
    const openAddress = Boolean(anchorElAddress);
    const idAddress = openAddress ? 'simple-popover' : undefined;



    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <MenuList className={classes.menuList}>
                    <MenuItem className={classes.menuItem} onClick={handleClickLandmark} aria-describedby={idLandmark}>
                        <span>特色地标</span>
                        <span>
                            <ChevronRightIcon color="primary" />
                        </span>
                    </MenuItem>
                    <Popover
                        className={classes.popover}
                        id={idLandmark}
                        open={openLandmark}
                        anchorEl={anchorElLandmark}
                        onClose={handleCloseLandmark}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Landmark />
                        
                    </Popover>

                    <MenuItem className={classes.menuItem}>
                        <Favorite />
                    </MenuItem>

                    <MenuItem className={classes.menuItem} onClick={handleClickAddress} aria-describedby={idAddress}>
                        <span>添加地址</span>
                        <span>
                            <ChevronRightIcon color="primary" />
                        </span>
                    </MenuItem>
                    <Popover
                        className={classes.popover}
                        id={idAddress}
                        open={openAddress}
                        anchorEl={anchorElAddress}
                        onClose={handleCloseAddress}
                        anchorOrigin={{
                            vertical:'center',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <AddAddress />
                    </Popover>

                </MenuList>
            </Paper>
        </div>
    );
}