import { useState } from "react";

import { FormContainer, FormTitle, TextFieldBox, Dividers, ButtonWrapper, Links } from "./loginform.elements";
import Input from "../Input";
import Button from "../Button";

const LoginForm = ({ handleToggleForms  }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};

	const handleToggleForm = (type) => {
		handleToggleForms(type)
	}
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
				<Links
					component="button"
					variant="body2"
					onClick={() => handleToggleForm('forgotpassword')}
					underline="hover"
				>
					Forgot Password?
				</Links>
			</TextFieldBox>

			<ButtonWrapper>
				<Button primary variant="contained" label="Login" />
			</ButtonWrapper>

			<Dividers flexItem>OR</Dividers>
			<ButtonWrapper>
				<Button onClick={() => handleToggleForm('signup')} variant="outlined" label="Sign up" />
			</ButtonWrapper>
		</FormContainer>
	);
};

export default LoginForm;
