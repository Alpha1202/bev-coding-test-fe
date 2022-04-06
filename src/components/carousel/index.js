import React, { useEffect } from "react";

import { CarouselContainer } from "./carousel.elements";

const Carousel = ({ children }) => {
	const startSlide = () => {
		let index = 0;
		let timer = setInterval(() => {
			let i;
			let x = document.getElementsByClassName("slide");

			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			index++;

			if (index > x.length) {
				index = 1;
			}
			x[index - 1].style.display = "block";
		}, 5000);
		return timer;
	};

	useEffect(() => {
		startSlide();
	}, []);

	return <CarouselContainer>{children}</CarouselContainer>;
};

export default Carousel;
