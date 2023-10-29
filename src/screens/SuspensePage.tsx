
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { RootViewMlc } from '../components/molecules';
import { ViewAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';
import { ThemeProvider } from '../assets/theme';
import Skeleton from '../components/organisms/Skeleton';


const SuspensePage: React.FC = () => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      mainView: { marginTop: 20, width: theme.layout.window.contentWidth },
      btnModal: { marginTop: 30, backgroundColor: theme.palette.primary.main },
    }), [theme]
  );

  // *************************************************************************************************************************



  return (
    <RootViewMlc style={{}}>
      <InfoView
        title={'... 이란?'}
        contents={'....'} />


      <ViewAtom style={[styles.mainView]}>
        <Skeleton />
      </ViewAtom>
    </RootViewMlc>
  );
};

export default SuspensePage;
