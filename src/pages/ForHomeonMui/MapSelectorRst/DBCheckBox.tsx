import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { create } from 'rt-state';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            margin: '0 0 0 0.5rem',
            justifyContent: 'space-between',
        }
    }),
);

export const DBCheckBox = create<{ checked: any, label: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, value: string }>((ctx) => {
    return (props) => {
        const classes = useStyles();
        const { checked, label, onChange, value } = props;
        // console.log(value);
        // console.log(checked);
        console.log(value);
        console.log(checked);

        return (
            <FormControlLabel
                className={classes.label}
                labelPlacement="start"
                control={<Checkbox icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}
                    color="primary" checked={checked} onChange={onChange} value={value} />}
                label={label}
            />
        )
    }
})

