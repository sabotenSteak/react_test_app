import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
	palette: {
		primary: {
            main: "#ff6347"
        },
		secondary: {
			main: "#0000cd"
		},
        error : {
            main: "#ff6347"
        },
        info : {
            main: "#fafad2"
        }
	}
})

export default customTheme; 