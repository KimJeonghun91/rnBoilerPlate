
import React, { Suspense, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { RootViewMlc } from '../components/molecules';
import { InfoView } from '../components/organisms';
import { ThemeProvider } from '../assets/theme';
import Skeleton from '../components/organisms/Skeleton';
import { fetchDetailData } from '../utils/api';
import { useQuery } from '@tanstack/react-query';
import { TextAtom } from '../components/atoms';


const SuspensePage: React.FC = () => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
    }), [theme]
  );

  // *************************************************************************************************************************

  return (
    <RootViewMlc style={{}}>
      <InfoView
        title={'Suspense 란?'}
        contents={'데이터 로딩 및 코드 분할과 같은 비동기 작업을 더 쉽게 다룰 수 있게 해주는 기능. 주로 React 애플리케이션에서 비동기 작업을 처리하고 로딩 상태를 관리하는 데 사용.'} />

      <Suspense fallback={<Skeleton />}>
        <DetailPageRender />
      </Suspense>
    </RootViewMlc>
  );
};


const DetailPageRender: React.FC = function DetailPageRender() {
  const { data } = useQuery<string, Error>(
    ["DetailPageRender"],
    () => fetchDetailData(),
    { initialData: undefined, suspense: true, cacheTime: 0 },
  );

  return (
    <TextAtom style={{ marginTop: 30 }}>{data}</TextAtom>
  )
}

export default SuspensePage;
