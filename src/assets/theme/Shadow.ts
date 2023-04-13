import { Platform } from "react-native";

const defaultShadow = {
  ...Platform.OS === 'ios' ? {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4.65
  } : {
    elevation: 6,
  }
};

const lightShadow = {
  ...defaultShadow,
  ...Platform.OS === 'ios' && {
    shadowColor: '#ddd',
    shadowOpacity: 0.3,
  }
};

const darkShadow = {
  ...defaultShadow,
  // ...Platform.OS === 'ios' && {
  //   shadowColor: '#000',
  //   shadowOpacity: 0.8,
  // }
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
};