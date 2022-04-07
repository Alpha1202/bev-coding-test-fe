import { useState } from "react";

import { FormContainer, FormTitle, TextFieldBox, Dividers, ButtonWrapper, Links } from "../LoginForm/loginform.elements";
import Input from "../Input";
import Button from "../Button";

const ForgotPasswordForm = ({ handleToggleForms }) => {
	const [email, setEmail] = useState("");
	const [showCodeInput, setShowCodeInput] = useState(false);
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	const [resetCode, setResetCode] = useState("");

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
				<Input id="login-form-username" label="E-mail" required={true} type="email" value={email} handleChange={handleEmailChange} hasAdornment={false} />
			</TextFieldBox>

			{showCodeInput && (
				<>
					<TextFieldBox>
						<Input
							id="forgot-password-form-code"
							label="Code"
							required={true}
							type="number"
							value={resetCode}
							handleChange={handleResetCodeChange}
							hasAdornment={false}
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
				<Button primary variant="contained" label={showCodeInput ? "Send" : "Continue"} />
			</ButtonWrapper>

			<Dividers flexItem>OR</Dividers>
			<ButtonWrapper>
				<Button onClick={() => handleToggleForm("login")} variant="outlined" label="Login" />
			</ButtonWrapper>
		</FormContainer>
	);
};

export default ForgotPasswordForm;
