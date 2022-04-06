import { NavbarWrapper, ToolBar, Logo, NavbarContainer, MenuContainer, IconButtonWrapper, Menuicon } from "./navbar.elements";

const Navbar = () => {
	return (
		<NavbarWrapper position="static">
			<NavbarContainer maxWidth="xl">
				<ToolBar disableGutters>
					<Logo variant="h6" noWrap component="div">
						Tavern
					</Logo>
					<MenuContainer>
						<IconButtonWrapper
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							// onClick={handleOpenNavMenu}
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
