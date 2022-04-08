import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormContainer, FormTitle, TextFieldBox, Dividers, ButtonWrapper, Links } from "../LoginForm/loginform.elements";
import Input from "../Input";
import Button from "../Button";

import { resetPasswordTokenRequest, resetPasswordRequest } from "../../store/actions/reset-password";

const ForgotPasswordForm = ({ handleToggleForms }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const [email, setEmail] = useState("");
	const [showCodeInput, setShowCodeInput] = useState(false);
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	const [resetCode, setResetCode] = useState("");

	const [resetToken, setResetToken] = useState("");

	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleCPasswordChange = (value) => {
		setCPassword(value);
	};
	const handleResetCodeChange = (value) => {
		setResetCode(value);
	};
	const handleToggleForm = (type) => {
		handleToggleForms(type);
	};

	const handleSubmit = async () => {
		if (!showCodeInput) {
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
			const response = await dispatch(resetPasswordTokenRequest({ email }));

			setResetCode(response.data[0].tempToken);
			setResetToken(response.data[0].token);

			if (response.status === "success") {
				setShowCodeInput(true);

			} else {
				enqueueSnackbar(response.message || response.error.email, {
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					preventDuplicate: true,
					variant: "error",
				});
			}
		} else {
			if (!password) {
				enqueueSnackbar("Please enter a new password", {
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					preventDuplicate: true,
					variant: "error",
				});
			}
			if (password !== cpassword) {
				enqueueSnackbar("Passwords do not match", {
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					preventDuplicate: true,
					variant: "error",
				});
			}
			const payload = {
				new_password: password,
				confirm_password: cpassword,
			};

			
			const response = await dispatch(resetPasswordRequest(resetToken, payload));

			if (response.status === "success") {
				enqueueSnackbar("Password reset Successful", {
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					preventDuplicate: true,
					variant: "success",
				});
				handleToggleForm("login")
			} else {
				enqueueSnackbar(response.message || response.error.new_password || response.error.confirm_password, {
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					preventDuplicate: true,
					variant: "error",
				});
			}
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
			<FormTitle variant="h4">Forgot Password</FormTitle>
			<TextFieldBox>
				<Input
					id="forgot-password-form-email"
					disabled={showCodeInput}
					label="E-mail"
					required={true}
					type="email"
					value={email}
					handleChange={handleEmailChange}
					hasAdornment={false}
				/>
			</TextFieldBox>

			{showCodeInput && (
				<>
					<TextFieldBox>
						<Input
							id="forgot-password-form-code"
							label="Code"
							required={true}
							type="text"
							value={resetCode}
							handleChange={handleResetCodeChange}
							hasAdornment={false}
							disabled={resetCode}
						/>
					</TextFieldBox>

					<TextFieldBox normal component="span">
						<Links
							component="button"
							variant="body2"
							// onClick={() => handleToggleForm('forgotpassword')}
							underline="hover"
						>
							Resend code?
						</Links>
					</TextFieldBox>

					<TextFieldBox>
						<Input
							id="forgot-password-form-password"
							label="Enter Password"
							required={true}
							type="password"
							value={password}
							handleChange={handlePasswordChange}
							hasAdornment={true}
						/>
					</TextFieldBox>
					<TextFieldBox>
						<Input
							id="forgot-password-form-cpassword"
							label="Confirm Password"
							required={true}
							type="password"
							value={cpassword}
							handleChange={handleCPasswordChange}
							hasAdornment={true}
						/>
					</TextFieldBox>
				</>
			)}

			<ButtonWrapper>
				<Button onClick={handleSubmit} primary variant="contained" label={showCodeInput ? "Send" : "Continue"} />
			</ButtonWrapper>

			<Dividers flexItem>OR</Dividers>
			<ButtonWrapper>
				<Button onClick={() => handleToggleForm("login")} variant="outlined" label="Login" />
			</ButtonWrapper>
		</FormContainer>
	);
};

export default ForgotPasswordForm;
