import { useState } from "react";

import { FormContainer, FormTitle, TextFieldBox, Dividers, ButtonWrapper, Links } from "../LoginForm/loginform.elements";
import Input from "../Input";
import Button from "../Button";

const SignupForm = ({ handleToggleForms  }) => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	const [file, setFile] = useState("");

	const handleFnameChange = (value) => {
		setFname(value);
	};
	const handleLnameChange = (value) => {
		setLname(value);
	};
	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePhoneNumberChange = (value) => {
		setPhoneNumber(value);
	};
	const handleCPasswordChange = (value) => {
		setCPassword(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleFileChange = (value) => {
		setFile(value);
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
			<FormTitle variant="h4">Sign up</FormTitle>
			<TextFieldBox>
				<Input
					id="signup-form-fname"
					label="First Name"
					required={true}
					type="first name"
					value={fname}
					handleChange={handleFnameChange}
					hasAdornment={false}
				/>
			</TextFieldBox>
			<TextFieldBox>
				<Input id="signup-form-lname" label="Last Name" required={true} type="last name" value={lname} handleChange={handleLnameChange} hasAdornment={false} />
			</TextFieldBox>
			<TextFieldBox>
				<Input id="signup-form-email" label="E-mail" required={true} type="email" value={email} handleChange={handleEmailChange} hasAdornment={false} />
			</TextFieldBox>
			<TextFieldBox>
				<Input
					id="signup-form-phone"
					label="Phone Number"
					required={true}
					type="tel"
					value={phoneNumber}
					handleChange={handlePhoneNumberChange}
					hasAdornment={false}
				/>
			</TextFieldBox>

			<TextFieldBox>
				<Input
					id="signup-form-password"
					label="Password"
					required={true}
					type="password"
					value={password}
					handleChange={handlePasswordChange}
					hasAdornment={true}
				/>
			</TextFieldBox>

			<TextFieldBox>
				<Input
					id="signup-form-cpassword"
					label="Confirm Password"
					required={true}
					type="password"
					value={cpassword}
					handleChange={handleCPasswordChange}
					hasAdornment={true}
				/>
			</TextFieldBox>

			<TextFieldBox>
				<Input id="signup-form-avatar" label="" required={true} type="file" value={file} handleChange={handleFileChange} hasAdornment={false} />
			</TextFieldBox>

			<ButtonWrapper>
				<Button primary variant="contained" label="Sign up" />
			</ButtonWrapper>

			<Dividers flexItem>OR</Dividers>
			<ButtonWrapper>
				<Button onClick={() => handleToggleForm('login')} variant="outlined" label="Login" />
			</ButtonWrapper>
		</FormContainer>
	);
};

export default SignupForm;
