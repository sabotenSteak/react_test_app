//import './App.css';
import React from "react";
import { ThemeProvider, Box, Button } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

import MyAppBar from "./Components/MyAppBar";
import TopRow from "./Components/TopRow";
import ScheduleOfStaff from "./Components/ScheduleOfStaff"
import StaffInserter from "./Components/StaffInserter"

import customTheme from "./resources/customTheme.js";
import monthlyWindow from "./resources/monthlyWindow.json";
import staffs from "./resources/staffs.json";

const App = () => 
{
	const initialBadgeUnitsOfStaff = [...monthlyWindow].map((_,i) => (
        {	
			index:i,
            badgeClassification:"",
			badgeLength:4,
            startMonth:"",
            endMonth:"",
            amount:0
        }
    ));
	const initialBadge = [...staffs].map((val) => (
		{
			staffID : val.id,
			//extendStopper : true,
			badgeUnits: [...initialBadgeUnitsOfStaff]
		}
	));
	const [badge, setBadge] = React.useState(initialBadge);
	
	console.log(badge);

	const onClassification = (staffID, index, badgeClassification) => {
		const newBadge = [...badge].map(val => 
			val.staffID === staffID 
				? {...val, badgeUnits:val.badgeUnits.map( val =>
					val.index === index
						? {...val, badgeClassification}
						: val				
					)}
				: val	
		)
		setBadge(newBadge);
	}

	const onStartMonth = (staffID, index, startMonth) => {
		const newBadge = [...badge].map(val => 
			val.staffID === staffID 
				? {...val, badgeUnits:val.badgeUnits.map( val =>
					val.index === index
						? {...val, startMonth}
						: val				
					)}
				: val
		)
		setBadge(newBadge);
	}

	const onEndMonth = (staffID, index, endMonth) => {
		const newBadge = [...badge].map(val => 
			val.staffID === staffID 
				? {...val, badgeUnits: val.badgeUnits.map( val =>
					val.index === index
						? {...val, endMonth}
						: val				
					)}
				: val
		)
		setBadge(newBadge);
	}

	const onTermChange = (staffID, index, isExtend) => {
		const newBadge = [...badge].map(val => 
			val.staffID === staffID
				? {...val, badgeUnits:val.badgeUnits.map( val =>
					val.index === index && isExtend === true
						? {...val, badgeLength: val.badgeLength + 1}
						: val.index === index && isExtend === false
							? {...val, badgeLength: val.badgeLength -1 }
								: val
					)}
				:val
		)
		setBadge(newBadge);
	}

	const onBadgeNumberChange = (staffID, isAdd) => {
		console.log(staffID, isAdd)
		const newBadge = [...badge].map(val =>
			val.staffID === staffID && isAdd === false
				? {...val, badgeUnits: val.badgeUnits.filter((_,i) =>
					(i !== val.badgeUnits.length-1)
				)}
				: val.staffID === staffID && isAdd === true
					? {...val, badgeUnits: val.badgeUnits.concat(
						{
						index:val.badgeUnits.length,
						badgeClassification:"",
						badgeLength:2,
						startMonth:"",
						endMonth:"",
						amount:0
						})
					}
					: val
		)
		setBadge(newBadge);	
	}
	
	return (
		<>
			<ThemeProvider 
				theme={customTheme}
			>
        		<MyAppBar/>				
				<Box
					sx={{
						m:"0px 10px 0px",
						//width:"3000px"
					}}
				>
					<TopRow
						monthlyWindow={monthlyWindow}
					/>
					{[...staffs].map((staff,i)=>
						<ScheduleOfStaff
							key={staff.id}
							staff={staff}
							badgeUnits={
								staff.id === badge[i].staffID
									? badge[i].badgeUnits
									: ""
							}
							/*extendStopper={
								staff.id === badge[i].staffID
									? badge[i].extendStopper
									: ""
							}*/
							monthlyWindow={monthlyWindow}
							onClassification={onClassification}
							onStartMonth={onStartMonth}
							onEndMonth={onEndMonth}
							onTermChange={onTermChange}
							onBadgeNumberChange={onBadgeNumberChange}
						/>
					)}
				<Button
					variant="outlined"
					startIcon={<PersonAdd/>}
					sx={{m:1}}
				>
					Add New Person
				</Button>
				←SIP
				</Box>
			</ThemeProvider>
		</>
	)	
};

export default App;
