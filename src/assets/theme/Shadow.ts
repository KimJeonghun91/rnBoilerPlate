import { Platform } from 'react-native';

const defaultShadow = {
  ...Platform.OS === 'ios' ? {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
  } : {
    shadowColor: '#00000080',
    elevation: 6,
  },
};

const lightShadow = {
  ...defaultShadow,
  ...Platform.OS === 'ios' ? {
    shadowColor: '#ddd',
  } : {
    shadowColor: '#ddddddcc',
    elevation: 6,
  },
};

const darkShadow = {
  ...defaultShadow,
  ...Platform.OS === 'ios' ? {
    shadowColor: '#000',
  } : {
    shadowColor: '#00000080',
    elevation: 6,
  },
};


export type IShadow = {
  shadowColor?: string;
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
};

export function shadow(themeMode: 'light' | 'dark'): IShadow {
  return themeMode === 'light' ? darkShadow : lightShadow;
}
