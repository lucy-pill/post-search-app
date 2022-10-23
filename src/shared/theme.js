const calcRem = (size) => `${size / 14}rem`;

const fontSize = {
  xs: calcRem(10),
  sm: calcRem(12),
  base: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xxl: calcRem(20),
  xxxl: calcRem(22),
  xxxxl: calcRem(24),
};

const fontWeight = {
  regular: 400,
  medium: 600,
  bold: 800,
};

const lineHeight = {
  xxs: calcRem(18),
  xs: calcRem(20),
  sm: calcRem(22),
  base: calcRem(24),
  lg: calcRem(26),
  xl: calcRem(28),
  xxl: calcRem(30),
  xxxl: calcRem(32),
  xxxxl: calcRem(34),
};

const theme = {
  fontSize,
  fontWeight,
  lineHeight,
}

export default theme;