import React, { ViewProps, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from '../../assets/theme';
import LoaderMlc from './LoaderMlc';

type RootViewMlcProps = ViewProps & {
  isLoader?: boolean
  statusBarColor?: string
  barStyle?: 'light-content' | 'dark-content'
};

const RootViewMlc = ({ isLoader = false, statusBarColor = '', barStyle = 'dark-content', ...props }: RootViewMlcProps) => {
  const theme = ThemeProvider();

  return (
    <SafeAreaView style={[styles.flex1, { width: theme.layout.window.width, backgroundColor: theme.palette.background.default }, props.style]} edges={['top', 'bottom']}>
      <StatusBar barStyle={barStyle ? barStyle : theme.palette.mode === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={statusBarColor ? statusBarColor : theme.palette.background.default} />

      <KeyboardAvoidingView style={styles.flex1} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        {
          isLoader ? (<LoaderMlc />) : (
            <ScrollView style={styles.flex1} contentContainerStyle={styles.scrollcc} keyboardShouldPersistTaps="handled">
              {props.children}
            </ScrollView>
          )
        }
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

RootViewMlc.defaultProps = {
  style: {}, // 디폴트
};

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  scrollcc: { flexGrow: 1, alignItems: 'center' },
});

export default RootViewMlc;
