import { useId } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";

import {
	MainContainer,
	LeftSectionContainer,
	RightSectionContainer,
	ImageContainer,
	Image,
	CarouselBox,
	CarouselTitle,
	CarouselText,
} from "./landingPage.elements";

import CarouselWrapper from "../../components/carousel";
import Navbar from "../../components/Navbar";
import { landingPageData } from "./data";

const LandingPage = () => {
	const id = useId();

	return (
		<MainContainer>
			<Navbar />
			<LeftSectionContainer>
				<CarouselWrapper>
					{landingPageData.map((data) => (
						<CarouselBox component="div" key={id}>
							<CarouselTitle variant="h2">
								<b>{data.title}</b>
							</CarouselTitle>
							<CarouselText variant="h5">{data.text}</CarouselText>
						</CarouselBox>
					))}
				</CarouselWrapper>
			</LeftSectionContainer>
			<RightSectionContainer>
				<ImageContainer>
					<Image component="img" src="https://res.cloudinary.com/de8vrxbqq/image/upload/v1649221418/inbev/main_ps2qin.jpg" alt="hero" loading="lazy" />
				</ImageContainer>
			</RightSectionContainer>
		</MainContainer>
	);
};

export default LandingPage;
