import { useMemo } from 'react';
import { useTypedSelector } from '../../state/redux/Store';
import { useThemeStore } from '../../state/zustand/Store';
import { palette, IPalette } from './Palette';
import layout, { ILayout } from './Layout';
import { shadow, IShadow } from './Shadow';
import Config from '../constants/Config';
import * as IF from '../../utils/InterFace';

// ----------------------------------------------------------------------

interface ThemeOptions {
  currentMode: 'light' | 'dark';
  palette: IPalette;
  shadow: IShadow;
  layout: ILayout;
}


// !! 주의 : 사용하는 전역 상태 관리자만 남기고 제거 해야됨. !!
let gState: IF.TGlobalState = Config.GLOBAL_STATE;
const ThemeProvider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { mode } = gState === 'zustand' ? useThemeStore() : useTypedSelector((state) => state.theme);

  const useTheme: ThemeOptions = useMemo(() => ({
    currentMode: mode,
    palette: palette(mode),
    shadow: shadow(mode),
    layout: layout,
  }), [mode]);

  return useTheme;
};


export { ThemeProvider };
