import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Grid, GridFixedItem, RootViewMlc } from '../components/molecules';
import { CardView, InfoView } from '../components/organisms';
import { TextAtom, ViewAtom } from '../components/atoms';
import { ThemeProvider } from '../assets/theme';
import { NaviItem, naviList } from '../components/organisms/navigation/NaviList';
import * as IF from '../utils/InterFace';



const Main = () => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            mainView: { marginTop: 20, width: theme.layout.window.width, paddingBottom: 20 },
            cardViewSt: { marginHorizontal: '3%' },
            cardInnerView: { width: '100%' },
        }), [theme]
    );
    const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();

    // *************************************************************************************************************************

    return (
        <RootViewMlc edges={['top']}>
            <InfoView style={{}}
                title={'React Native for Junior'}
                contents={`본 프로젝트는 RN을 처음 시작하는 사용자를 위해 제작되었습니다.

기본적인 RN의 동작원리 부터 바로 사용가능한 몇가지 예제까지 포함되어 있습니다.

추가 패키지는 설치는 지양하지만 전역 상태 관리를 위한 redux,zustand 혹은 react-native-reanimated 와 같은 패키지는 추가되어 있습니다.`} />

            <ViewAtom style={[styles.mainView]}>
                <Grid rowGap={20} columnGap={0}>
                    {
                        naviList.map((item: NaviItem, index: number) => (
                            <GridFixedItem key={index} size={6}>
                                <CardView title={item.path} subTitle={item.name} style={styles.cardViewSt}
                                    onPress={() => { navigation.navigate(item.path, item.initParams); }}>
                                    <ViewAtom style={styles.cardInnerView}>
                                        <TextAtom>{item.info}</TextAtom>
                                    </ViewAtom>
                                </CardView>
                            </GridFixedItem>
                        ))
                    }
                </Grid>
            </ViewAtom>
        </RootViewMlc>
    );
};

export default Main;
