import { styled } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Menu, DialogActions, Container, DialogContent, DialogContentText, DialogTitle, Slide,  Avatar, Button, Tooltip, MenuItem, Dialog } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import { COLORS } from "../../constants/theme";

export const Slider = styled(Slide)`
	height: 100vh;
   width: 35%;
   max-width: 35%;
	z-index: 999;
  position: absolute;
  background-color: ${COLORS.mainGrey};
  right: 0;
  /* text-align: right; */

  @media screen and (max-width: 900px) {
	  width: 100%;
    max-width: 100%;
	}
`;

export const SliderNav = styled(Box)`
  flex-direction: row;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const DialogContainer = styled(Dialog)`
	height: 100vh;
	display: flex;
	z-index: 999;
  flex-direction: row-reverse;

`;

export const DialogAction  = styled(DialogActions)`
 
  margin: 1rem 0rem;

  &:hover {
    background-color: ${COLORS.yellow};
  }
`;
export const DialogActionButton  = styled(Button)`
  color: ${COLORS.brown};
`;

export const DialogBoxWrapper = styled(Box)`
  /* background-color: red; */
  height: 100%;
  width: 100%;
  margin-top: 3rem;
`;

export const DialogFormsContainer = styled(Box)`
 height: 85vh;
 overflow: hidden;
`;