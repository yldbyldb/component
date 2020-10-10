import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { create, rst, stateS } from 'rt-state';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        checkbox: {
            display: 'flex',
            // borderRadius:'1rem',
        },
        formControl: {
            margin: theme.spacing(3),
            // borderRadius:'1rem',

        },
        label: {
            margin: '0 0 0 1rem',
            justifyContent: 'space-between',
        }
    }),
);

export const Landmark = create((ctx) => {
    const data = stateS<{[key:string]:any}>({ cemetery: false, petrolStation: false, mosque: false, mobileBaseStation: false, church: false, });
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        data[name]=event.target.checked;
        rst.forceUpdate(data);
    };

    return (props) => {
        const classes = useStyles();
        
        return (
            <div className={classes.checkbox}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            className={classes.label}
                            labelPlacement="start"
                            control={<Checkbox icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                color="primary" checked={data.cemetery} onChange={handleChange('cemetery')} value="cemetery" />}
                            label="墓地"
                        />
                        <FormControlLabel
                            className={classes.label}
                            labelPlacement="start"
                            control={<Checkbox icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                color="primary" checked={data.petrolStation} onChange={handleChange('petrolStation')} value="petrolStation" />}
                            label="加油站"
                        />
                        <FormControlLabel
                            className={classes.label}
                            labelPlacement="start"
                            control={
                                <Checkbox icon={<CircleUnchecked />}
                                    checkedIcon={<CircleCheckedFilled />}
                                    color="primary" checked={data.mosque} onChange={handleChange('mosque')} value="mosque" />
                            }
                            label="清真寺"
                        />
                        <FormControlLabel
                            className={classes.label}
                            labelPlacement="start"
                            control={
                                <Checkbox icon={<CircleUnchecked />}
                                    checkedIcon={<CircleCheckedFilled />}
                                    color="primary" checked={data.mobileBaseStation} onChange={handleChange('mobileBaseStation')} value="mobileBaseStation" />
                            }
                            label="移动基站"
                        />
                        <FormControlLabel
                            className={classes.label}
                            labelPlacement="start"
                            control={
                                <Checkbox icon={<CircleUnchecked />}
                                    checkedIcon={<CircleCheckedFilled />}
                                    color="primary" checked={data.church} onChange={handleChange('church')} value="church" />
                            }
                            label="教堂"
                        />
                    </FormGroup>
                    {/* <FormHelperText>*可以多选</FormHelperText> */}
                </FormControl>
            </div>
        )
    }
})
