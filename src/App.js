import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

const theme = createTheme({
	typography: {
		fontFamily: ["Poppins"].join(","),
	},
});

const App = () => {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Container disableGutters maxWidth="xl">
					<Router>
						<Routes>
							<Route exact path="/" element={<div>Hello</div>} />
						</Routes>
					</Router>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default App;
