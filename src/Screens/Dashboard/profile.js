import { useState } from "react";
import { Input, Button } from "@mui/material";
import {
	SectionWrapper,
	SectionTitle,
	SectionText,
	Formcontainer,
	FormLeftContainer,
	FormRightContainer,
	UserAvatar,
	UserAvatarBox,
	UserDetailsText,
	UserDetailsBox,
	UserDetailsBoldText
} from "./dashboard.elements";

import { FormContainer, FormTitle, TextFieldBox, Dividers, ButtonWrapper, Links } from "../../components/LoginForm/loginform.elements";
import Inputs from "../../components/Input";
import Buttons from "../../components/Button";

const Profile = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	const handleOldPasswordChange = (value) => {
		setOldPassword(value);
	};

	const handleNewPasswordChange = (value) => {
		setNewPassword(value);
	};

	const handleCPasswordChange = (value) => {
		setCPassword(value);
	};

	return (
		<SectionWrapper>
			<SectionTitle variant="h6">Profile</SectionTitle>
			<Formcontainer>
				<FormLeftContainer>
					<UserAvatarBox>
						<UserAvatar sx={{ width: 80, height: 80 }}>NZ</UserAvatar>
						<Input accept="image/*" style={{ display: "none" }} id="raised-button-file" type="file" />
						<label htmlFor="raised-button-file">
							<Button variant="text" component="span" label="Change">
								change
							</Button>
						</label>
					</UserAvatarBox>
					<UserDetailsBox>
						<UserDetailsText>First Name: <UserDetailsBoldText variant="span">Nzubechukwu</UserDetailsBoldText> </UserDetailsText>
					</UserDetailsBox>
					<UserDetailsBox>
						<UserDetailsText>Last Name: <UserDetailsBoldText variant="span">Nnamani</UserDetailsBoldText> </UserDetailsText>
					</UserDetailsBox>
					<UserDetailsBox>
						<UserDetailsText>E-mail: <UserDetailsBoldText variant="span">nzubennamani@gmail.com</UserDetailsBoldText> </UserDetailsText>
					</UserDetailsBox>
					<UserDetailsBox>
						<UserDetailsText>Phone Number: <UserDetailsBoldText variant="span">+2348139228639</UserDetailsBoldText> </UserDetailsText>
					</UserDetailsBox>
				</FormLeftContainer>
				<FormRightContainer>
					<FormContainer
						component="form"
						sx={{ width: '100%', padding: '0rem 1rem',
							"& .MuiTextField-root": { m: 1, width: "25ch" },
						}}
						noValidate
						autoComplete="off"
					>
						<FormTitle variant="h4">Change Password</FormTitle>
						<TextFieldBox>
							<Inputs
								id="change-password-form-old-password"
								label="Old Password"
								required={true}
								type="text"
								value={oldPassword}
								handleChange={handleOldPasswordChange}
								hasAdornment={false}
							/>
						</TextFieldBox>
						<TextFieldBox>
							<Inputs
								id="change-password-form-new-password"
								label="New Password"
								required={true}
								type="text"
								value={newPassword}
								handleChange={handleNewPasswordChange}
								hasAdornment={false}
							/>
						</TextFieldBox>
						<TextFieldBox>
							<Inputs
								id="change-password-form-c-password"
								label="Confirm Password"
								required={true}
								type="text"
								value={cPassword}
								handleChange={handleCPasswordChange}
								hasAdornment={false}
							/>
						</TextFieldBox>
						<ButtonWrapper>
							<Buttons primary variant="contained" label="Submit" />
						</ButtonWrapper>
					</FormContainer>
				</FormRightContainer>
			</Formcontainer>
		</SectionWrapper>
	);
};

export default Profile;
