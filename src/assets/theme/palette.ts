export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export type IPalette = {
  mode: 'light' | 'dark';
  text: {
    primary: string;
    secondary: string;
    placeholder: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
    neutral: string;
  };
  action: {
    active: string;
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
  };
  common: {
    black: string;
    white: string;
    modalBg: string;
  };
  primary: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  secondary: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  info: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  success: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  warning: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  error: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  grey: {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  red: {
    [key: number]: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  green: {
    [key: number]: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  blue: {
    [key: number]: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  yellow: {
    [key: number]: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  orange: {
    [key: number]: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  purple: {
    [key: number]: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  divider: string;
};

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const RED = {
  100: '#FFE9E9',
  200: '#FFC7CE',
  300: '#FFA5B3',
  400: '#FF758D',
  500: '#FF3F5D',
  600: '#DB2B4B',
  700: '#B21E3D',
  800: '#8C142E',
  900: '#740D24',
};

const GREEN = {
  100: '#D9F7E5',
  200: '#B5EFCB',
  300: '#90E7B0',
  400: '#65D68F',
  500: '#2CCD6D',
  600: '#23A25C',
  700: '#1C7A4E',
  800: '#14523F',
  900: '#0E3D34',
};

const BLUE = {
  100: '#D6E9FF',
  200: '#ADD2FF',
  300: '#84BBFF',
  400: '#4D95FF',
  500: '#006AFF',
  600: '#0057D6',
  700: '#0042AD',
  800: '#002C84',
  900: '#00216B',
};

const YELLOW = {
  100: '#FFF6D9',
  200: '#FFEAA8',
  300: '#FFDD77',
  400: '#FFCC47',
  500: '#FFB700',
  600: '#DB9900',
  700: '#B27A00',
  800: '#8C5B00',
  900: '#744700',
};

const ORANGE = {
  100: '#FFE5D5',
  200: '#FFC8AA',
  300: '#FFAA7F',
  400: '#FF8C54',
  500: '#FF6600',
  600: '#DB5300',
  700: '#B23F00',
  800: '#8C2C00',
  900: '#742200',
};

const PURPLE = {
  100: '#F5E6FF',
  200: '#E2C2FF',
  300: '#CE9DFF',
  400: '#B36DFF',
  500: '#9131FF',
  600: '#6B28D6',
  700: '#4D20AD',
  800: '#321784',
  900: '#26136B',
};

const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  darker: '#0A5554',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff', modalBg: GREY[800] + '99' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  red: RED,
  green: GREEN,
  blue: BLUE,
  yellow: YELLOW,
  orange: ORANGE,
  purple: PURPLE,
  divider: GREY[500] + '40', // 투명도 0.24
  action: {
    hover: GREY[500] + '14', // 투명도 0.08
    selected: GREY[500] + '26', // 투명도 0.16
    disabled: GREY[500] + 'CC',  // 투명도 0.8
    disabledBackground: GREY[500] + '40',  // 투명도 0.24
    focus: GREY[500] + '40',  // 투명도 0.24
    hoverOpacity: 0.08,  // 투명도 0.08
    disabledOpacity: 0.48,  // 투명도 0.48
  },
};

export function palette(themeMode: 'light' | 'dark'): IPalette {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
      placeholder: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
      placeholder: GREY[500],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500] + '26', // 투명도 0.16
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
