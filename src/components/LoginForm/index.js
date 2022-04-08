import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormContainer, FormTitle, TextFieldBox, Dividers, ButtonWrapper, Links } from "./loginform.elements";
import Input from "../Input";
import Button from "../Button";

import { loginRequest } from "../../store/actions/login";

const LoginForm = ({ handleToggleForms }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { enqueueSnackbar } = useSnackbar();

	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};

	const handleToggleForm = (type) => {
		handleToggleForms(type);
	};

	const handleFormSubmit = async () => {
		if (!email) {
			enqueueSnackbar("Please enter a valid email", {
				anchorOrigin: {
					vertical: "top",
					horizontal: "right",
				},
				preventDuplicate: true,
				variant: "error",
			});
		}
		if (!password) {
			enqueueSnackbar("Please enter your password", {
				anchorOrigin: {
					vertical: "top",
					horizontal: "right",
				},
				preventDuplicate: true,
				variant: "error",
			});
		}

		const response = await dispatch(loginRequest({ email, password }));

		if (response.status === "success") {
			enqueueSnackbar("Login Successful", {
				anchorOrigin: {
					vertical: "top",
					horizontal: "right",
				},
				preventDuplicate: true,
				variant: "success",
			});
			navigate("/dashboard");
		} else {
			enqueueSnackbar(response.message ||response.error.password || response.error.email, {
				anchorOrigin: {
					vertical: "top",
					horizontal: "right",
				},
				preventDuplicate: true,
				variant: "error",
			});
		}
	};
	return (
		<FormContainer
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<FormTitle variant="h4">Login</FormTitle>
			<TextFieldBox>
				<Input id="login-form-username" label="E-mail" required={true} type="email" value={email} handleChange={handleEmailChange} hasAdornment={false} />
			</TextFieldBox>

			<TextFieldBox>
				<Input
					id="login-form-password"
					label="Password"
					required={true}
					type="password"
					value={password}
					handleChange={handlePasswordChange}
					hasAdornment={true}
				/>
			</TextFieldBox>

			<TextFieldBox normal component="span">
				<Links component="button" variant="body2" onClick={() => handleToggleForm("forgotpassword")} underline="hover">
					Forgot Password?
				</Links>
			</TextFieldBox>

			<ButtonWrapper>
				<Button onClick={handleFormSubmit} primary variant="contained" label="Login" />
			</ButtonWrapper>

			<Dividers flexItem>OR</Dividers>
			<ButtonWrapper>
				<Button onClick={() => handleToggleForm("signup")} variant="outlined" label="Sign up" />
			</ButtonWrapper>
		</FormContainer>
	);
};

export default LoginForm;
