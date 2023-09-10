
import React, { useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useAppDispatch } from '../state/redux/Store';
import { ButtonMlc, RootViewMlc } from '../components/molecules';
import { TextAtom, ViewAtom } from '../components/atoms';
import { ThemeProvider } from '../assets/theme';
import * as IF from '../utils/InterFace';
import { logout } from '../state/redux/authSlice';
import { InfoView } from '../components/organisms';
import Config from '../assets/constants/Config';
import { useAuthStore } from '../state/zustand/Store';
import { AuthInfoProvider } from '../state';

interface AuthProps {
}

const withAuth = <P extends AuthProps>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuth: React.FC<P> = (props) => {
        const authInfo = AuthInfoProvider();
        const theme = ThemeProvider();
        const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();

        if (authInfo?.id) {
            return <WrappedComponent {...props} theme={theme} authInfo={authInfo} navigation={navigation} />;
        } else {
            return (
                <RootViewMlc style={{}}>
                    <InfoView
                        title={'HOC'}
                        contents={`Higher-Order Component

HOC 패턴은 기존 컴포넌트를 감싸서 새로운 기능을 추가하는 방식.
HOC는 고차 컴포넌트를 반환하며, 이를 이용해 상태 관리, 인증, 라우팅 등 다양한 기능을 추가함.`} />


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
    theme: ReturnType<typeof ThemeProvider>;
    authInfo: IF.IAuthState;
    navigation: StackNavigationProp<IF.RootStackParams>;
}


const MyComponent: React.FC<MyComponentProps> = ({ theme, authInfo, navigation }) => {
    const dispatch = useAppDispatch();
    const { logout: logoutZs } = useAuthStore();
    let gState: IF.TGlobalState = Config.GLOBAL_STATE;

    const logOut = useCallback(() => {
        Alert.alert('', '로그아웃 하시겠습니까?',
            [{ text: '취소', style: 'cancel', onPress: () => { } },
            {
                text: '확인', onPress: () => {
                    navigation.dispatch(DrawerActions.closeDrawer());

                    if (gState === 'redux') {
                        dispatch(logout());
                    } else if (gState === 'zustand') {
                        logoutZs();
                    }
                    Alert.alert('', '로그아웃 하였습니다.');
                },
            }], { cancelable: false }
        );
    }, [navigation, dispatch, gState, logoutZs]);

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
