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

// React component names must start with an uppercase letter.
export function ThemeProvider(): ThemeOptions {
  const { mode } = useTypedSelector((state) => state.theme);

  const useTheme: ThemeOptions = useMemo(() => ({
    currentMode: mode,
    palette: palette(mode),
    shadow: shadow(mode),
    layout: layout,
  }), [mode]);

  return useTheme;
}
