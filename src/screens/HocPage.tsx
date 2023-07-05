
import React, { useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useAppDispatch, useTypedSelector } from '../utils/redux/Store';
import { ButtonMlc, RootViewMlc } from '../components/molecules';
import { TextAtom, ViewAtom } from '../components/atoms';
import { ThemeProvider } from '../assets/theme';
import * as IF from '../utils/InterFace';
import { logout } from '../utils/redux/authSlice';

interface AuthProps {
}

const withAuth = <P extends AuthProps>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuth: React.FC<P> = (props) => {
        const authInfo = useTypedSelector((state) => state.auth);
        const theme = ThemeProvider();
        const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();

        if (authInfo?.id) {
            return <WrappedComponent {...props} theme={theme} authInfo={authInfo} navigation={navigation} />;
        } else {
            return (
                <RootViewMlc style={{}}>
                    <ViewAtom style={[styles.mainView, { width: theme.layout.window.contentWidth }]}>
                        <TextAtom>로그인이 필요합니다.</TextAtom>
                        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="로그인 하기" fontSize={theme.layout.subtitle2} onPress={() => { navigation.navigate('Login', {}); }} />
                    </ViewAtom>
                </RootViewMlc>
            );
        }
    };

    return WithAuth;
};


interface MyComponentProps {
    theme: ReturnType<typeof ThemeProvider>,
    authInfo: IF.IAuthState,
    navigation: StackNavigationProp<IF.RootStackParams>
}


const MyComponent: React.FC<MyComponentProps> = ({ theme, authInfo, navigation }) => {
    const dispatch = useAppDispatch();

    const logOut = useCallback(() => {
        Alert.alert('', '로그아웃 하시겠습니까?',
            [{ text: '취소', style: 'cancel', onPress: () => { } },
            {
                text: '확인', onPress: () => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                    dispatch(logout());
                    Alert.alert('', '로그아웃 하였습니다.');
                },
            }], { cancelable: false }
        );
    }, [navigation, dispatch]);

    return (
        <RootViewMlc>
            <ViewAtom style={[styles.mainView, { width: theme.layout.window.contentWidth }]}>
                <TextAtom>ID: {authInfo.id}</TextAtom>
                <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="로그 아웃" fontSize={theme.layout.subtitle2} onPress={() => { logOut(); }} />
            </ViewAtom>
        </RootViewMlc>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginTop: 20,
    },
    btnLogin: { marginTop: 10, marginBottom: 8, paddingVertical: 12 },
});


const HocPage: any = withAuth(MyComponent);
export default HocPage;
