import { styled } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { COLORS } from "../../constants/theme";

export const NavbarWrapper = styled(AppBar)`
	height: 10vh;
	display: flex;
	z-index: 999;
	position: absolute;
	background-color: ${({ dashboard }) => (dashboard ? "grey" : "transparent")};
`;

export const NavbarContainer = styled(Container)`
	/* height: ${({ fixed }) => fixed && "100vh"};
	background-color: ${({ fixed }) => (fixed ? "red" : "")}; */
`;

export const ToolBar = styled(Toolbar)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
export const MenuContainer = styled(Box)`
	/* flex-grow: 1; */
`;
export const MenuWrapper = styled(Menu)``;

export const IconButtonWrapper = styled(IconButton)`
	@media screen and (min-width: 600px) {
		color: ${COLORS.brown};
	}
`;

export const Menuicon = styled(MenuIcon)``;

export const Closeicon = styled(CloseIcon)``;
export const BackIcon = styled(ArrowBackIosNewIcon)``;
export const AvatarIcon = styled(AccountCircleIcon)``;

export const Logo = styled(Typography)`
	margin-right: 2rem;
	display: flex;
	color: ${COLORS.brown};
	/* font-size: 3rem; */
	font-weight: bold;

	font-size: ${({ dashboard }) => (dashboard ? "1.5rem" : "3rem")};

	@media screen and (max-width: 600px) {
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
