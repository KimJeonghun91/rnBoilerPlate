import { useMemo } from 'react';
import { useTypedSelector } from '../../utils/redux/Store';
import { palette, IPalette } from './Palette';
import layout, { ILayout } from './Layout';
import { shadow, IShadow } from './Shadow';

// ----------------------------------------------------------------------

interface ThemeOptions {
  palette: IPalette,
  shadow: IShadow,
  layout: ILayout,
  currentMode: 'light' | 'dark'
}

export function themeProvider(): ThemeOptions {
  const { mode } = useTypedSelector((state) => state.theme);

  const useTheme: ThemeOptions = useMemo(() => ({
    currentMode: mode,
    palette: palette(mode),
    shadow: shadow(mode),
    layout: layout,
  }), [mode]);

  return useTheme;
}
