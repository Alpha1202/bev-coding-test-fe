import { useState } from "react";

import { MainContainer } from "../LandingPage/landingPage.elements";
import { SectionContainer } from "./dashboard.elements";
import Overview from "./overview";
import Profile from "./profile";
import History from "./history";
import Navbar from "../../components/Navbar/dashboard.navbar";
import Dialog from "../../components/Dialog/dashboard.dialog";

const Dashboard = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [overview, setOverview] = useState(true);
	const [profile, setProfile] = useState(false);
	const [history, setHistory] = useState(false);

	const handleClickOpen = (toggleState) => {
		setOpenDialog(toggleState);
	};

	const handleToggleViews = (type) => {
		setOpenDialog(false);
		if (type === "overview") {
			setOverview(true);
			setProfile(false);
			setHistory(false);
		} else if (type === "history") {
			setHistory(true);
			setOverview(false);
			setProfile(false);
		} else if (type === "profile") {
			setProfile(true);
			setOverview(false);
			setHistory(false);
		}
	};

	return (
		<MainContainer>
			<Navbar open={openDialog} handleClickOpen={handleClickOpen} />
			<SectionContainer>
				{overview && <Overview />}
				{profile && <Profile />}
				{history && <History />}
			</SectionContainer>
			<Dialog open={openDialog} toggleViews={handleToggleViews} handleClickOpen={handleClickOpen} />
		</MainContainer>
	);
};

export default Dashboard;
