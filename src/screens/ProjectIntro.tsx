import React, { useMemo } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { RootViewMlc } from '../components/molecules';
import { InfoView } from '../components/organisms';
import { TextAtom, TouchAbleOpAtom } from '../components/atoms';
import { ThemeProvider } from '../assets/theme';



const ProjectIntro = () => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            clickView: { marginTop: 15, paddingLeft: 10 },
            underLine: { textDecorationLine: 'underline', color: theme.palette.blue[600] },
            infoMargin: { marginTop: 10 },
        }), [theme]
    );

    // *************************************************************************************************************************

    return (
        <RootViewMlc edges={['top']}>
            <InfoView style={{}}
                title={'깃허브 저장소'}
                contents={'본 프로젝트의 저장소 링크 입니다.\n토론과 PR은 언제든지 환영합니다 😘'}>
                <TouchAbleOpAtom style={styles.clickView} onPress={() => { Linking.openURL('https://github.com/KimJeonghun91/rnBoilerPlate'); }}>
                    <TextAtom style={[styles.underLine]}>{'깃허브 저장소 (링크)'}</TextAtom>
                </TouchAbleOpAtom>
            </InfoView>

            <InfoView style={styles.infoMargin}
                title={'의존 패키지'}
                contents={'본 프로젝트에서 사용중인 패키지 리스트 입니다.'}>
                <TouchAbleOpAtom style={styles.clickView} onPress={() => { Linking.openURL('https://www.npmjs.com/package/react-native-reanimated'); }}>
                    <TextAtom style={[styles.underLine]}>{'react-native-reanimated'}</TextAtom>
                </TouchAbleOpAtom>

                <TouchAbleOpAtom style={styles.clickView} onPress={() => { Linking.openURL('https://www.npmjs.com/package/react-native-reanimated'); }}>
                    <TextAtom style={[styles.underLine]}>{'작성중...'}</TextAtom>
                </TouchAbleOpAtom>
            </InfoView>
        </RootViewMlc>
    );
};

export default ProjectIntro;
