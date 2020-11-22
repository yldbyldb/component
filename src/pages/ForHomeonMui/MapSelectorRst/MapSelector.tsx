import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { Paper } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { MapCheckBox } from './MapCheckBox';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddAddress from './AddAddress';
import { Favorite } from './Favorite';
import { create, stateS, state } from 'rt-state';


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

export const MapSelector = create((ctx) => {
    const mapSelectorData = stateS<{ anchorElLandmark: HTMLElement | null; anchorElAddress: HTMLElement | null }>({ anchorElLandmark: null, anchorElAddress: null, });
    const handleClickLandmark=(event: React.MouseEvent<HTMLElement, MouseEvent>)=>{
        mapSelectorData.value.anchorElLandmark = event.currentTarget;
        mapSelectorData.forceUpdate();
        console.log(mapSelectorData.value.anchorElLandmark);
    }
    function handleCloseLandmark() {
        mapSelectorData.value.anchorElLandmark = null;
        mapSelectorData.forceUpdate();
    }

    const handleClickAddress=(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        mapSelectorData.value.anchorElAddress = event.currentTarget;
        mapSelectorData.forceUpdate();
        console.log(mapSelectorData.value.anchorElAddress);

    }
    function handleCloseAddress() {
        mapSelectorData.value.anchorElAddress = null;
        mapSelectorData.forceUpdate();
    }


    const mapSelectorFavorite = stateS<{ [key: string]: boolean }>({ house: false });

    function handleFavoriteChange(event: React.ChangeEvent<HTMLInputElement>) {
        mapSelectorFavorite.value.house = event.target.checked;
        mapSelectorFavorite.forceUpdate();
    }

    const landMarkData = stateS<{ [key: string]: boolean }>({
        cemetery: false,
        petrolStation: false,
        mosque: false,
        mobileStation: false,
        church: false,
    });
    // const handleLandMarkChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     landMarkData.value[name] = event.target.checked;
    //     landMarkData.forceUpdate();
    //     console.log(event.target.checked);
    //     console.log(name);
    //     console.log(landMarkData.value[name]);
    //     isLandMarkChecked(name)
    // };
    // const isLandMarkChecked= (name:string)=>{
    //     return landMarkData.value[name];
    // };
    const marks = [
        { label: 'Cemetery', name: 'cemetery' },
        { label: 'Petrol Station', name: 'petrolStation' },
        { label: 'Mosque', name: 'mosque' },
        { label: 'Mobile Station', name: 'mobileStation' },
        { label: 'Church', name: 'church' },
    ];

    return (props) => {
        const classes = useStyles();
        const openLandmark = Boolean(mapSelectorData.value.anchorElLandmark);
        const idLandmark = openLandmark ? 'simple-popover' : undefined;
        const openAddress = Boolean(mapSelectorData.value.anchorElAddress);
        const idAddress = openAddress ? 'simple-popover' : undefined;
        // const isLandMarkChecked=(name:string)=>{
        //     return landMarkData.value[name];
        // };
        const handleLandMarkChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            landMarkData.value[name] = event.target.checked;
            landMarkData.forceUpdate();
            console.log(event.target.checked);
            console.log(name);
            console.log(landMarkData.value[name]);
            isLandMarkChecked(name)
        };
        const isLandMarkChecked= (name:string)=>{
            return landMarkData.value[name];
            
        };

        // console.log(idLandmark);
        // console.log(idAddress);
        // console.log(isLandMarkChecked);

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
                            anchorEl={mapSelectorData.value.anchorElLandmark}
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
                            <MapCheckBox
                                // checked={(name:string)=>landMarkData.value[name]}
                                checked={isLandMarkChecked}
                                onChange={handleLandMarkChange}
                                // onChange={(mark: { label: string, name: string }) => (handleLandMarkChange(mark.name))}
                                value={(name:string) => {return name}}
                                label={(mark: { label: string, name: string }) => mark.label}
                                marks={marks}
                            />
                        </Popover>

                        <MenuItem className={classes.menuItem}>
                            <Favorite
                                checked={mapSelectorFavorite.value.house}
                                onChange={handleFavoriteChange}
                                value='house'
                                label='favorite house'
                            />
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
                            anchorEl={mapSelectorData.value.anchorElAddress}
                            onClose={handleCloseAddress}
                            anchorOrigin={{
                                vertical: 'center',
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
        )
    }
});






