import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { create } from 'rt-state';
import { DBCheckBox } from './DBCheckBox'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(0),
            // borderRadius:'1rem',
        },
    }),
);

export const Favorite = create<{checked:any, label:string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, value:string}>((ctx) => {

    return (props) => {
        const classes = useStyles();
        const { checked, label, onChange, value } = props;
        console.log(value);
        console.log(checked);

        return (
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <DBCheckBox
                        checked={checked}
                        onChange={onChange}
                        value={value}
                        label={label}
                    />
                </FormGroup>
            </FormControl>
        )
    }
})
