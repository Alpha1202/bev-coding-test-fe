import { styled } from "@mui/material/styles";
import {
	AppBar,
	TextField,
	Box,
	Toolbar,
	Typography,
	Paper,
	Drawer,
	ListItem,
	ListItemIcon,
	ListItemText,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { COLORS } from "../../constants/theme";

// export const ButtonContainer = styled(Button)`
// 	width: 100%;
// 	color: ${COLORS.brown};
// 	border-color: ${COLORS.brown};
// 	padding: 1rem;

// 	background-color: ${({ primary }) => (primary ? COLORS.yellow : COLORS.white)};

// 	&:hover {
// 		background-color: ${({ primary }) => (primary ? COLORS.white : COLORS.yellow)};

// 		border-color: ${({ primary }) => (primary ? COLORS.brown : COLORS.yellow)};
// 	}
// `;

export const SectionContainer = styled(Box)`
	background-color: white;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const SectionWrapper = styled(Container)`
	height: 80%;
	display: flex;
	flex-direction: column;
	/* align-items: flex-start; */
	/* justify-content: flex-start; */
`;

export const SectionTitle = styled(Typography)`
	color: ${COLORS.brown};
	font-weight: bold;
	padding: 2rem;
	font-size: 2rem;
`;

export const SectionText = styled(Typography)`
	color: ${COLORS.brown};

	/* padding: 2rem;
 font-size: 2rem; */
`;

export const Formcontainer = styled(Paper)`
	/* background-color: red; */
	height: 80%;
	width: 100%;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 900px) {
		/* display: none; */
		flex-direction: column;
		height: 100%;
		overflow-y: scroll;
	}
`;

export const FormLeftContainer = styled(Box)`
	/* background-color: blue; */
	height: 100%;
	width: 70%;
	display: flex;
	padding: 2rem;
	flex-direction: column;
	/* align-items: center;
	justify-content: center; */

	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const FormRightContainer = styled(Box)`
	/* background-color: red; */
	height: 100%;
	width: 30%;

	border-left: 1px solid ${COLORS.brown};
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (min-width: 900px) {
		overflow-y: scroll;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		/* background-color: red; */
		border-left:none;
	}
`;

export const UserAvatarBox = styled(Box)`
	width: 100%;
	height: 30%;
	margin-bottom: 1rem;
`;

export const UserDetailsBox = styled(Box)`
	width: 100%;
	/* background-color: blue; */
	height: 70%;
	padding: 0.6rem 0.5rem;
`;

export const UserAvatar = styled(Avatar)`

`;

export const UserDetailsText = styled(Typography)`
color: ${COLORS.brown};
`;

export const UserDetailsBoldText = styled(Typography)`
color: ${COLORS.brown};
font-weight: bold;
`;
