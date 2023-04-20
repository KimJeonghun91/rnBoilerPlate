import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { themeProvider } from '../assets/theme';
// import * as ServerApi from '../utils/ServerApi';
import * as IF from '../utils/InterFace';
import { ImageAtom, ViewAtom } from '../components/atoms';
import { loginSuccess, loginFailed } from '../utils/redux/AuthSlice';
import { ButtonMlc, LoginTextInputMlc, RootViewMlc } from '../components/molecules';



const Login = () => {
    const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();
    const theme = themeProvider();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');


    const handleLogin = useCallback(async (getId: string) => {
        setLoading(false);

        try {
            // 로그인 API 연결
            // const response = await ServerApi.loginUser({ getId, getPw });
            dispatch(loginSuccess({ id: getId, token: 'aaaaa-bbbb-vvvv-dddddd-eeeeee' }));
            navigation.reset({
                index: 0, routes: [{ name: 'MainScreen', params: {} }],
            });

        } catch (error) {
            dispatch(loginFailed('LOGIN false'));
        }
    }, [navigation, dispatch]);



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


            <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.main }]} title="로그인 하기" onPress={() => {
                if (id === '') { return Alert.alert('', '아이디를 입력해주세요.'); }
                setLoading(true);
                setTimeout(() => {
                    handleLogin(id);
                }, 1500);
            }} />
        </RootViewMlc>
    );
};

const styles = StyleSheet.create({
    btnLogin: { marginTop: 30, width: 340 },
    mainView: {
        marginTop: 20,
    },
    logo: { width: 150, height: 150, marginTop: 30 }
});

export default Login;
