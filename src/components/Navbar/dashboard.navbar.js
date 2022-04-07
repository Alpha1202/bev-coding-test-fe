import { useState } from "react";
import { NavbarWrapper, ToolBar, Logo, NavbarContainer, MenuContainer, IconButtonWrapper, Menuicon, AvatarIcon } from "./navbar.elements";

const Navbar = ({ open, handleClickOpen }) => {
	// const [openDialog, setOpenDialog] = useState(true);

	const handleOpen = () => {
		handleClickOpen(true);
	};

	return (
		<NavbarWrapper dashboard position="static" sx={{ boxShadow: 0 }}>
			<NavbarContainer maxWidth="xl">
				<ToolBar disableGutters>
					<Logo dashboard variant="h6" noWrap component="div">
						Dashboard
					</Logo>
					<MenuContainer>
						<IconButtonWrapper
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpen}
							color="inherit"
						>
							<Menuicon />
						</IconButtonWrapper>
					</MenuContainer>
				</ToolBar>
			</NavbarContainer>
		</NavbarWrapper>
	);
};

export default Navbar;
