
export const COLORS = {
  //neutral
  black: '#000000',
  white: '#FFFFFF',
  red: '#E94444',
  yellow: '#F4A310',
  //color variations
  mainGrey: '#E5E5E5',
  mainBlue: '#18355D',
  mainGreen: '#18C895',
  lightBlue: '#5C9BD6',
  darkText: '#0A1A29',
  greyText: '#5C5F69',
  borderGrey: '#C0C0C0',
  brown: "#6E2827"
};

export const SIZES = {
  //font sizes
  base: '8%',
  xsmall: '0.8rem',
  smallish: '1rem',
  small: '2rem',
  medium: '4rem',
  large: '5rem',
  xlarge: '20%',
  xxlarge: '24%',
  xxxlarge: '26%',

  //margin
  marginHorizontal: '10%',
  marginVertical: '10%',

  //padding
  padding: '24%',

  //radius
  buttonRadius: '50%',
  cardRadius: '5%',
  radius: '8%',

};

export const FONTS = {
  xsmall: { fontSize: SIZES.xsmall, letterSpacing: 0.15 },
  smallish: { fontSize: SIZES.smallish, letterSpacing: 0 },
  small: { fontSize: SIZES.smallish, letterSpacing: 0 },
  medium: { fontSize: SIZES.medium, letterSpacing: 0 },
  large: { fontSize: SIZES.large, letterSpacing: 0 },
  xlarge: { fontSize: SIZES.xlarge, letterSpacing: 0 },
  xxlarge: { fontSize: SIZES.xxlarge, letterSpacing: 0 },
  xxxlarge: { fontSize: SIZES.xxxlarge, letterSpacing: 0 }
};

export default { COLORS, SIZES, FONTS };
