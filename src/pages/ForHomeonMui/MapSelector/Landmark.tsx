import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

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
        label:{
            margin:'0 0 0 1rem'
        }
    }),
);

export default function Landmark() {
    const classes = useStyles();
    const [landmark, setLandmark] = React.useState({
        cemetery: false,
        petrolStation: false,
        mosque: false,
        mobileBaseStation: false,
        church: false,
    });
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setLandmark({ ...landmark, [name]: event.target.checked });
    };
    const { cemetery, petrolStation, mosque, mobileBaseStation, church } = landmark;

    return (
        <div className={classes.checkbox}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        className={classes.label}
                        labelPlacement="start"
                        control={<Checkbox icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            color="primary" checked={cemetery} onChange={handleChange('cemetery')} value="cemetery" />}
                        label="墓地"
                    />
                    <FormControlLabel
                        className={classes.label}
                        labelPlacement="start"
                        control={<Checkbox icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            color="primary" checked={petrolStation} onChange={handleChange('petrolStation')} value="petrolStation" />}
                        label="加油站"
                    />
                    <FormControlLabel
                        className={classes.label}
                        labelPlacement="start"
                        control={
                            <Checkbox icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                color="primary" checked={mosque} onChange={handleChange('mosque')} value="mosque" />
                        }
                        label="清真寺"
                    />
                    <FormControlLabel
                        className={classes.label}
                        labelPlacement="start"
                        control={
                            <Checkbox icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                color="primary" checked={mobileBaseStation} onChange={handleChange('mobileBaseStation')} value="mobileBaseStation" />
                        }
                        label="移动基站"
                    />
                    <FormControlLabel
                        className={classes.label}
                        labelPlacement="start"
                        control={
                            <Checkbox icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                color="primary" checked={church} onChange={handleChange('church')} value="church" />
                        }
                        label="教堂"
                    />
                </FormGroup>
                {/* <FormHelperText>*可以多选</FormHelperText> */}
            </FormControl>
        </div>
    )
}