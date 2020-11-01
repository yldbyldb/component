import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import FormHelperText from '@material-ui/core/FormHelperText';
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
    const data = stateS<{ [key: string]: boolean }>({ cemetery: false, petrolStation: false, mosque: false, mobileBaseStation: false, church: false, });
    const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        data.value[name] = event.target.checked;
        data.forceUpdate();
    };
    const marks = [
        { label: 'Cemetery', name: 'cemetery' },
        { label: 'Petrol Station', name: 'petrolStation' },
        { label: 'Mosque', name: 'mosque' },
        { label: 'Mobile Station', name: 'mobileStation' },
        { label: 'Church', name: 'church' },
    ];

    return (props) => {
        const classes = useStyles();

        return (
            <div className={classes.checkbox}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        {marks.map((mark) => (
                            <FormControlLabel
                                className={classes.label}
                                labelPlacement="start"
                                control={
                                    <Checkbox
                                        icon={<CircleUnchecked />}
                                        checkedIcon={<CircleCheckedFilled />}
                                        color="primary"
                                        checked={data.value[mark.name]}
                                        onChange={handleChange(mark.name)}
                                        value={mark.name}
                                    />
                                }
                                label={mark.label}
                            />
                        ))}
                    </FormGroup>
                    {/* <FormHelperText>*可以多选</FormHelperText> */}
                </FormControl>
            </div>
        )
    }
})
