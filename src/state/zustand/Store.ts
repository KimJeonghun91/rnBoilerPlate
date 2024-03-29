import { create } from 'zustand';
import * as IF from '../../utils/InterFace';


export const useCounterStore = create<IF.ICounterState>((set) => ({
  value: 0,
  increment: () => {
    set((state) => ({ value: state.value + 1 }));
  },
  decrement: () => {
    set((state) => ({ value: state.value - 1 }));
  },
  incrementByAmount: (getNumber: number) => {
    set((state) => ({ value: state.value + getNumber }));
  },
}));


export const useThemeStore = create<IF.IThemeState>((set) => ({
  mode: 'light',
  toggleMode: () => {
    set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' }));
  },
  changeMode: (value: 'light' | 'dark') => set({ mode: value }),
}));


export const useAuthStore = create<IF.IAuth>((set) => ({
  id: null,
  isLoggedIn: false,
  token: null,
  error: null,
  loginSuccess: (id: string, token: string) =>
    set((state) => ({
      ...state,
      id,
      isLoggedIn: true,
      token,
      error: null,
    })),
  loginFailed: (error: string) =>
    set((state) => ({
      ...state,
      id: null,
      isLoggedIn: false,
      token: null,
      error,
    })),
  logout: () =>
    set((state) => ({
      ...state,
      id: null,
      isLoggedIn: false,
      token: null,
      error: null,
    })),
}));
