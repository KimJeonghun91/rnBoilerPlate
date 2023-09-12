
import React, { useMemo } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../state/redux/counterSlice';
import { ButtonMlc, RootViewMlc } from '../components/molecules';
import { TextAtom, TouchAbleOpAtom, ViewAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';
import { ThemeProvider } from '../assets/theme';
import { useCounterStore } from '../state/zustand/Store';
import * as IF from '../utils/InterFace';
import Config from '../assets/constants/Config';
import { CounterProvider } from '../state';


const GlobalStatePage: React.FC = () => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      mainView: { marginTop: 20, width: theme.layout.window.contentWidth },
      clickView: { marginTop: 15, paddingLeft: 10 },
      underLine: { textDecorationLine: 'underline', color: theme.palette.blue[600] },
      btnLogin: { marginTop: 30, width: theme.layout.window.contentWidth, backgroundColor: theme.palette.primary.main },
      counterSt: { fontSize: theme.layout.h1, textAlign: 'center' },
    }), [theme]
  );

  // *************************************************************************************************************************

  const { increment: incrementZs, decrement: decrementZs }: IF.ICounterState = useCounterStore();
  const dispatch = useDispatch();
  const { value: counterValue } = CounterProvider();
  let gState: IF.TGlobalStateManager = Config.GLOBAL_STATE_MANAGER;


  const handleIncrement = () => {
    if (gState === 'redux') {
      dispatch(increment());
    } else if (gState === 'zustand') {
      incrementZs();
    }
  };

  const handleDecrement = () => {
    if (gState === 'redux') {
      dispatch(decrement());
    } else if (gState === 'zustand') {
      decrementZs();
    }
  };


  return (
    <RootViewMlc style={{}}>
      <InfoView style={{}}
        title={'상태 관리 라이브러리'}
        contents={'MVC 양방향 데이터 흐름의 문제를 해결하기 위해 등장한 Flux 아키텍처. Flux 아키텍처는 단방향 데이터 흐름을 강조하며, 상태(state)를 중심으로 구성됨. 이를 구현하기 위해 상태 관리 라이브러리가 등장. 이로인해 중앙 집중화된 관리 및 상태 예측이 용이해짐.'}>
        <TouchAbleOpAtom style={styles.clickView} onPress={() => { Linking.openURL('https://kimjeonghun91.github.io/blog/devlog/2021-01-21-rn-redux/'); }}>
          <TextAtom style={[styles.underLine]}>{'내용 더 보기 (링크)'}</TextAtom>
        </TouchAbleOpAtom>
      </InfoView>


      <ViewAtom style={[styles.mainView]}>
        <TextAtom style={styles.counterSt}>{String(counterValue)}</TextAtom>

        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="Counter 더하기" fontSize={theme.layout.subtitle2}
          onPress={() => { handleIncrement(); }} />
        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="Counter 빼기" fontSize={theme.layout.subtitle2}
          onPress={() => { handleDecrement(); }} />
      </ViewAtom>
    </RootViewMlc>
  );
};

export default GlobalStatePage;
