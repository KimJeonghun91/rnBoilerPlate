import { useMemo } from 'react';
import { palette, IPalette } from './palette';
import { useTypedSelector } from '../../utils/redux/store';

// ----------------------------------------------------------------------

interface ThemeOptions {
  palette: IPalette
}

export function ThemeProvider(): ThemeOptions {
  const { mode } = useTypedSelector((state) => state.theme);

  const useTheme: ThemeOptions = useMemo(() => ({
    palette: palette(mode),
  }), [mode]);

  return useTheme;
};