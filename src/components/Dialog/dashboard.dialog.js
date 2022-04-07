import React, { useState } from "react";

import { Slider, DialogContainer, DialogBoxWrapper, SliderNav, DialogActionButton, DialogAction, DialogFormsContainer } from "./dialog.elements";

import { NavbarWrapper, ToolBar, Logo, NavbarContainer, MenuContainer, Closeicon, BackIcon, IconButtonWrapper, Menuicon } from "../Navbar/navbar.elements";

const DashboardDialog = ({ open, handleClickOpen, toggleViews }) => {
	const handleClose = () => {
		handleClickOpen(false);
	};

	const handleToggleViews = (type) => {
		toggleViews(type);
	};

	return (
		<Slider direction="left" in={open} mountOnEnter unmountOnExit>
			<NavbarContainer fixed>
				<SliderNav>
					<IconButtonWrapper onClick={() => handleClose()}>
						<Closeicon />
					</IconButtonWrapper>
				</SliderNav>
				<DialogBoxWrapper>
					<DialogAction>
						<DialogActionButton onClick={() => handleToggleViews("overview")}>Overview</DialogActionButton>
					</DialogAction>
					<DialogAction>
						<DialogActionButton onClick={() => handleToggleViews("profile")}>Profile</DialogActionButton>
					</DialogAction>
					<DialogAction>
						<DialogActionButton onClick={() => handleToggleViews("history")}>History</DialogActionButton>
					</DialogAction>
					<DialogAction>
						<DialogActionButton>Logout</DialogActionButton>
					</DialogAction>
				</DialogBoxWrapper>
			</NavbarContainer>
		</Slider>
	);
};

export default DashboardDialog;
