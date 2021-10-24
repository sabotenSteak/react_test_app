import React from "react";
import { AppBar, Typography } from "@mui/material";

const MyAppBar = () => {
	return (		
		<AppBar 
			position="relative"
			sx={{ 
				bgcolor:"white",
				boxShadow:1
			}}
		>
			<Typography
				variant="h5"
				margin="4"
				sx={{
					color:"black",
					m:4
				}}
			>
			🍒 no title.
			</Typography>
		</AppBar>	
	)
};

export default MyAppBar;