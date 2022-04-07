import { styled } from "@mui/material/styles";
import { AppBar, TextField, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { COLORS } from "../../constants/theme";

export const ButtonContainer = styled(Button)`
	width: 100%;
	color: ${COLORS.brown};
	border-color: ${COLORS.brown};
	padding: 1rem;

	background-color: ${({ primary }) => (primary ? COLORS.yellow : COLORS.white)};

	&:hover {
		background-color: ${({ primary }) => (primary ? COLORS.white : COLORS.yellow)};

		border-color: ${({ primary }) => (primary ? COLORS.brown : COLORS.yellow)};
	}
`;
