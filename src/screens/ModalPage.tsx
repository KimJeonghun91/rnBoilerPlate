
import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonMlc, RootViewMlc } from '../components/molecules';
import { ViewAtom } from '../components/atoms';
import { InfoView, ModalOrgs } from '../components/organisms';
import { ThemeProvider } from '../assets/theme';


const ModalPage: React.FC = () => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      mainView: { marginTop: 20, width: theme.layout.window.contentWidth },
      btnModal: { marginTop: 30, backgroundColor: theme.palette.primary.main },
    }), [theme]
  );

  // *************************************************************************************************************************

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState<'center' | 'flex-end' | 'flex-start'>('center');


  return (
    <RootViewMlc style={{}}>
      <InfoView
        title={'모달(modal)이란?'}
        contents={'사용자 인터페이스 디자인 개념에서 자식 윈도에서 부모 윈도로 돌아가기 전에 사용자의 상호동작을 요구하는 창.'} />


      <ViewAtom style={[styles.mainView]}>
        <ButtonMlc containerStyle={[styles.btnModal]} title="상단 모달" onPress={() => { setModalPosition('flex-start'); setModalVisible(!modalVisible); }} />
        <ButtonMlc containerStyle={[styles.btnModal]} title="센터 모달" onPress={() => { setModalPosition('center'); setModalVisible(!modalVisible); }} />
        <ButtonMlc containerStyle={[styles.btnModal]} title="하단 모달" onPress={() => { setModalPosition('flex-end'); setModalVisible(!modalVisible); }} />
      </ViewAtom>



      {/* 모달 */}
      <ModalOrgs isVisible={modalVisible} callBackFn={() => { setModalVisible(false); }} modalPosition={modalPosition} isBackgroundTouchClose={true}/>
    </RootViewMlc>
  );
};

export default ModalPage;
