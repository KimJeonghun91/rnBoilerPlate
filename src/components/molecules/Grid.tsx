import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { ViewAtom } from '../atoms';

type GridProps = {
  children: ReactNode;
  rowGap?: number;
  columnGap?: number;
};

type GridItemProps = {
  size: number;
  children: ReactNode;
};

const Grid: React.FC<GridProps> = ({ children, rowGap = 0, columnGap = 0 }) => (
  <ViewAtom style={[styles.grid, { rowGap: rowGap, columnGap: columnGap }]}>{children}</ViewAtom>
);

const GridItem: React.FC<GridItemProps> = ({ size, children }) => (
  <ViewAtom style={[styles.gridItem, { flexBasis: `${size / 12 * 100}%` }]}>
    {children}
  </ViewAtom>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  gridItem: {
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: 'stretch',
  },
});

export { Grid, GridItem };