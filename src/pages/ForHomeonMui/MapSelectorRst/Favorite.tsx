import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { create, rst, stateS } from 'rt-state';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(0),
			// borderRadius:'1rem',
		},
		label: {
			margin: '0 0 0 0.5rem'
		}
	}),
);

export const Favorite = create((ctx) => {
	const data = stateS({ house: false });

	function handleChange( event: React.ChangeEvent<HTMLInputElement>) {
		data.value.house = event.target.checked;
		data.forceUpdate();
	}

	return (props) => {
		const classes = useStyles();
		return (
			<FormControl component="fieldset" className={classes.formControl}>
				<FormGroup>
					<FormControlLabel
						className={classes.label}
						labelPlacement="start"
						control={<Checkbox icon={<CircleUnchecked />}
							checkedIcon={<CircleCheckedFilled />}
							color="primary" checked={data.value.house} onChange={handleChange} value="house" />}
						label="房屋收藏"
					/>
				</FormGroup>
			</FormControl>
		)
	}
})

// const [favorite, setFavorite] = React.useState({
// 	house: false,
// });
// const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
// 	setFavorite({ ...favorite, [name]: event.target.checked });
// };
// const { house } = favorite;