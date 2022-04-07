import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { TextInput, Formcontrol, Inputlabel, Outlinedinput, Inputadornment } from "./input.elements";
import { IconButtonWrapper } from "../Navbar/navbar.elements";

const Input = ({
	error,
	required,
	handleMouseDownPassword,
	id,
	label,
	defaultValue,
	helperText,
	showPassword,
	hasAdornment,
	value,
	handleChange,
	handleClickShowPassword,
	type,
	hidden
}) => {
	return (
		<Formcontrol variant="outlined">
			<Inputlabel htmlFor={id}>{label}</Inputlabel>
			<Outlinedinput
				error={error}
				required={required}
				defaultValue={defaultValue}
				helperText={helperText}
				hidden={hidden}
				id={id}
				type={type}
				value={value}
				onChange={(e) => handleChange(e.target.value)}
				endAdornment={
					hasAdornment && (
						<Inputadornment position="end">
							<IconButtonWrapper aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButtonWrapper>
						</Inputadornment>
					)
				}
				label={label}
			/>
		</Formcontrol>
	);
	// return <TextInput required={required} error={error} id={id} label={label} defaultValue={defaultValue} helperText={helperText} />;
};

export default Input;
