import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Slider, DialogContainer, DialogBoxWrapper, SliderNav, DialogActionButton, DialogAction, DialogFormsContainer } from "./dialog.elements";

import { NavbarWrapper, ToolBar, Logo, NavbarContainer, MenuContainer, Closeicon, BackIcon, IconButtonWrapper, Menuicon } from "../Navbar/navbar.elements";

import { loginCleanUp } from "../../store/actions/login";

const DashboardDialog = ({ open, handleClickOpen, toggleViews }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClose = () => {
		handleClickOpen(false);
	};

	const handleToggleViews = (type) => {
		toggleViews(type);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		dispatch(loginCleanUp());
		navigate("/");
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
						<DialogActionButton onClick={() => handleLogout()}>Logout</DialogActionButton>
					</DialogAction>
				</DialogBoxWrapper>
			</NavbarContainer>
		</Slider>
	);
};

export default DashboardDialog;
