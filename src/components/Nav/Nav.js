import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import News from "../News/News";
import General from "../News/General";
import Business from "../News/Business";
import Health from "../News/Health";
import Science from "../News/Science";
import Technology from "../News/Technology";

function TabPanel(props) {
	console.log(props);
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function Nav() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="navPart container-fluid ">
			<div className={classes.root}>
				<AppBar
					position="static"
					className="bg-white text-dark ml-auto mr-auto "
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="simple tabs example"
						className="ml-auto mr-auto"
					>
						<Tab label="Home" {...a11yProps(0)} />
						<Tab
							label="General"
							{...a11yProps(1)}
						/>
						<Tab
							label="Business"
							{...a11yProps(2)}
						/>
						<Tab
							label="Health"
							{...a11yProps(3)}
						/>
						<Tab
							label="Science"
							{...a11yProps(4)}
						/>
						<Tab
							label="Technology"
							{...a11yProps(5)}
						/>
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<News></News>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<General></General>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Business></Business>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Health></Health>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<Science></Science>
				</TabPanel>
				<TabPanel value={value} index={5}>
					<Technology></Technology>
				</TabPanel>
			</div>
		</div>
	);
}
