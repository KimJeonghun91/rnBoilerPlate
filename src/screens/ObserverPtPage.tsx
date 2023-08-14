
import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { ButtonMlc, RootViewMlc } from '../components/molecules';
import { ViewAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';
import { Subject, Observer } from '../utils/observers';
import { ThemeProvider } from '../assets/theme';


const ObserverPtPage: React.FC = () => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      btnLogin: { marginTop: 30, width: theme.layout.window.contentWidth, backgroundColor: theme.palette.primary.main },
      mainView: { marginTop: 20, width: theme.layout.window.contentWidth },
      logo: { paddingHorizontal: 10, marginVertical: 10, fontSize: theme.layout.h5, color: theme.palette.text.primary, textAlign: 'left', fontWeight: 'bold', width: '100%' },
    }), [theme]
  );

  // *************************************************************************************************************************

  const subject = useMemo(() => new Subject(), []);

  useEffect(() => {

    // 컴포넌트가 마운트되었을 때 옵저버 등록
    const observer1: Observer = {
      id: 'observer1',
      notify: () => {
        Alert.alert('', 'Observer 1 received the event!');
      },
    };

    const observer2: Observer = {
      id: 'observer2',
      notify: () => {
        Alert.alert('', 'Observer 2 received the event!');
      },
    };

    subject.addObserver(observer1.id, observer1);
    subject.addObserver(observer2.id, observer2);


    return () => {
      // 컴포넌트가 언마운트되기 전에 옵저버 제거
      subject.removeObserver(observer1.id);
      subject.removeObserver(observer2.id);
    };
  }, [subject]);

  const handleButtonClick = (id: string, data: string) => {
    // 버튼 클릭 시 옵저버에게 데이터 전달
    subject.notifyObservers(id, data);
  };

  return (
    <RootViewMlc style={{}}>
      <InfoView
        title={'옴저버 패턴'}
        contents={'객체 간의 일대다(one-to-many) 의존성을 정의하는 패턴입니다. 이 패턴을 통해 객체의 상태 변화가 발생할 때, 해당 객체에 의존하는 다른 객체들에게 자동으로 알림을 보내고, 그에 따라 필요한 처리를 할 수 있도록 해줍니다.'} />


      <ViewAtom style={[styles.mainView]}>
        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="옵저버 전체" fontSize={theme.layout.subtitle2} onPress={() => { handleButtonClick('all', '전체 DATA'); }} />
        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="옵저버 observer1 전달" fontSize={theme.layout.subtitle2} onPress={() => { handleButtonClick('observer1', 'observer1 DATA'); }} />
        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="옵저버 observer2 전달" fontSize={theme.layout.subtitle2} onPress={() => { handleButtonClick('observer2', 'observer2 DATA'); }} />
      </ViewAtom>
    </RootViewMlc>
  );
};

export default ObserverPtPage;
