import { ViewProps, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from '../../assets/constants/Layout';
import LoaderMlc from './LoaderMlc';

type RootViewMlcProps = ViewProps & {
  isLoader?: boolean
};

const RootViewMlc = ({ isLoader = false, ...props }: RootViewMlcProps) => {

  return (
    <SafeAreaView style={{ flex: 1, width: Layout.window.width }} edges={['top', 'bottom']}>
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