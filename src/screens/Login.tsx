import React, { useState, useCallback, useMemo } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemeProvider } from '../assets/theme';
// import * as ServerApi from '../utils/ServerApi';
import * as IF from '../utils/InterFace';
import { ImageAtom, ViewAtom } from '../components/atoms';
import { loginSuccess, loginFailed } from '../state/redux/authSlice';
import { ButtonMlc, LoginTextInputMlc, RootViewMlc } from '../components/molecules';
import Config from '../assets/constants/Config';
import { useAuthStore } from '../state/zustand/Store';

type LoginProps = {
    navigation: StackNavigationProp<IF.RootStackParams>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            btnLogin: { marginTop: 30, width: 340, backgroundColor: theme.palette.primary.main },
            mainView: { marginTop: 20 },
            logo: { width: 150, height: 150, marginTop: 30 },
        }), [theme]
    );

    // *************************************************************************************************************************

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { loginSuccess: loginSuccessZs, loginFailed: loginFailedZs } = useAuthStore();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    let gState: IF.TGlobalStateManager = Config.GLOBAL_STATE_MANAGER;


    const handleLogin = useCallback(async (getId: string) => {
        setLoading(false);

        try {
            // 로그인 API 연결
            // const response = await ServerApi.loginUser({ getId, getPw });

            if (gState === 'redux') {
                dispatch(loginSuccess({ id: getId, token: 'aaaaa-bbbb-vvvv-dddddd-eeeeee' }));
            } else if (gState === 'zustand') {
                loginSuccessZs(getId, 'aaaaa-bbbb-vvvv-dddddd-eeeeee');
            }
            navigation.goBack();

        } catch (error) {
            if (gState === 'redux') {
                dispatch(loginFailed('LOGIN false'));
            } else if (gState === 'zustand') {
                loginFailedZs('LOGIN false');
            }
        }
    }, [navigation, dispatch, gState, loginFailedZs, loginSuccessZs]);



    return (
        <RootViewMlc isLoader={loading}>
            <ImageAtom style={styles.logo} source={require('../assets/img/logo.png')} />

            <ViewAtom style={styles.mainView}>
                <LoginTextInputMlc
                    allowFontScaling={false}
                    autoCapitalize="none"
                    placeholder={'아이디'}
                    placeholderTextColor={theme.palette.text.placeholder}
                    value={id}
                    onChangeText={(text) => setId(text)} />

                <LoginTextInputMlc
                    allowFontScaling={false}
                    autoCapitalize="none"
                    placeholder={'비밀번호'}
                    placeholderTextColor={theme.palette.text.placeholder}
                    value={pw}
                    onChangeText={(text) => setPw(text)} />
            </ViewAtom>


            <ButtonMlc containerStyle={[styles.btnLogin]} title="로그인 하기" onPress={() => {
                if (id === '') { return Alert.alert('', '아이디를 입력해주세요.'); }
                setLoading(true);
                setTimeout(() => {
                    handleLogin(id);
                }, 1500);
            }} />
        </RootViewMlc>
    );
};

export default Login;
