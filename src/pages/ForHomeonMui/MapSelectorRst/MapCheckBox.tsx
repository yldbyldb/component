import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { create } from 'rt-state';
import { DBCheckBox } from './DBCheckBox'


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
    }),
);

export const MapCheckBox = create<{ marks: Array<{label:string, name:string}>, checked: any, label: any, onChange: any, value: any }>((ctx) => {


    return (props) => {
        const classes = useStyles();
        const { marks, checked, label, onChange, value } = props
        console.log(value);
        console.log(checked);

        return (
            <div className={classes.checkbox}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        {marks.map((mark) => (
                            <DBCheckBox
                                checked={checked(mark.name)}
                                onChange={onChange(mark.name)}
                                value={value(mark.name)}
                                label={label(mark)}
                            />
                        ))}
                    </FormGroup>
                    {/* <FormHelperText>*可以多选</FormHelperText> */}
                </FormControl>
            </div>
        )
    }
})
