import React, { useState } from "react";

import { Slider, DialogContainer, DialogBoxWrapper, SliderNav, DialogActionButton, DialogAction, DialogFormsContainer } from "./dialog.elements";

import { NavbarWrapper, ToolBar, Logo, NavbarContainer, MenuContainer, Closeicon, BackIcon, IconButtonWrapper, Menuicon } from "../Navbar/navbar.elements";

import Loginform from "../LoginForm";
import SignupForm from "../SignupForm";
import ForgotPasswordForm from "../ForgotPasswordForm";

const Dialog = ({ open, handleClickOpen }) => {
	const [toggleForms, setToggleForms] = useState(false);
	const [toggleLoginForm, setToggleLoginForms] = useState(false);
	const [toggleSignupForms, setToggleSignupForms] = useState(false);
	const [toggleForgotPasswordForms, setToggleForgotPasswordForms] = useState(false);

	const handleClose = () => {
		handleClickOpen(false);
	};

	const handleGoBack = () => {
		setToggleForms(false);
		setToggleLoginForms(false);
		setToggleSignupForms(false);
		setToggleForgotPasswordForms(false);
	};

	const handleToggleForms = (type) => {
		setToggleForms(true);
		if (type === "login") {
			setToggleLoginForms(true);
			setToggleSignupForms(false);
			setToggleForgotPasswordForms(false);
		} else if (type === "signup") {
			setToggleSignupForms(true);
			setToggleLoginForms(false);
			setToggleForgotPasswordForms(false);
		} else if (type === "forgotpassword") {
			setToggleForgotPasswordForms(true);
			setToggleSignupForms(false);
			setToggleLoginForms(false);
		}
	};

	return (
		<Slider direction="left" in={open} mountOnEnter unmountOnExit>
			<NavbarContainer fixed>
				<SliderNav>
					<IconButtonWrapper onClick={handleGoBack}>{toggleForms && <BackIcon />}</IconButtonWrapper>

					<IconButtonWrapper onClick={() => handleClose()}>
						<Closeicon />
					</IconButtonWrapper>
				</SliderNav>
				{!toggleForms && (
					<DialogBoxWrapper>
						<DialogAction onClick={() => handleToggleForms("login")}>
							<DialogActionButton>Login</DialogActionButton>
						</DialogAction>
						<DialogAction onClick={() => handleToggleForms("signup")}>
							<DialogActionButton>Sign up</DialogActionButton>
						</DialogAction>
						<DialogAction onClick={() => handleToggleForms("forgotpassword")}>
							<DialogActionButton>Forgot Password</DialogActionButton>
						</DialogAction>
					</DialogBoxWrapper>
				)}
				<DialogFormsContainer>
					{toggleForms && toggleLoginForm && <Loginform handleToggleForms={handleToggleForms} />}
					{toggleForms && toggleSignupForms && <SignupForm handleToggleForms={handleToggleForms}  />}
					{toggleForms && toggleForgotPasswordForms && <ForgotPasswordForm handleToggleForms={handleToggleForms}  />}
				</DialogFormsContainer>
			</NavbarContainer>
		</Slider>
	);
};

export default Dialog;
