import { styled } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";

import { COLORS } from "../../constants/theme";

export const MainContainer = styled(Box)`
	height: 100vh;
	display: flex;
	max-height: 100%;
	position: relative;
`;

export const LeftSectionContainer = styled(Box)`
	background-color: ${COLORS.yellow};
	width: 65%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const RightSectionContainer = styled(Box)`
	background-color: ${COLORS.grey};
	width: 35%;
	max-width: 35%;
	height: 100%;
	max-height: 100%;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export const CarouselBox = styled(Box)``;

export const CarouselTitle = styled(Typography)`
	color: ${COLORS.brown};
`;

export const CarouselText = styled(Typography)`
	color: grey;
`;

export const ImageContainer = styled(Box)`
	width: 100%;
	height: 80%;
`;

export const Image = styled(Box)`
	width: 100%;
	height: 100%;
`;
