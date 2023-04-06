import { ViewProps, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from "../../assets/theme";
import LoaderMlc from './LoaderMlc';

type RootViewMlcProps = ViewProps & {
  isLoader?: boolean
};

const RootViewMlc = ({ isLoader = false, ...props }: RootViewMlcProps) => {
  const theme = ThemeProvider();

  return (
    <SafeAreaView style={{ flex: 1, width: theme.layout.window.width, backgroundColor: theme.palette.background.default }} edges={['top', 'bottom']}>
      <StatusBar barStyle={theme.palette.mode === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={theme.palette.background.default} />
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : undefined} enabled>
        {
          isLoader ? (<LoaderMlc />) : (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} keyboardShouldPersistTaps='handled'>
              {props.children}
            </ScrollView>
          )
        }
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

RootViewMlc.defaultProps = {
  style: {}, // 디폴트
};

export default RootViewMlc;