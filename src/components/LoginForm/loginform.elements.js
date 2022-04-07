import { styled } from "@mui/material/styles";
import { AppBar, TextField, Box, Toolbar, Typography, Menu, Link, Divider, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { COLORS } from "../../constants/theme";

export const FormContainer = styled(Box)`
	margin-top: 2rem;
  overflow-y: scroll;
  height: 100%;
`;

export const FormTitle = styled(Typography)`
	color: ${COLORS.brown};
`;

export const TextFieldBox = styled(Box)`
	padding: ${({ normal }) => (normal ? "0rem 0rem" : "2rem 0rem")};
`;

export const Links = styled(Link)`

`
export const Dividers = styled(Divider)`
	color: ${COLORS.brown};
`;

export const ButtonWrapper = styled(Box)`
	width: 100%;
	padding: 2rem 0rem;
	margin-top: 1rem;
`;
