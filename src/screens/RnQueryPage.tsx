
import React, { useMemo, useCallback } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useRefreshByUser } from '../hooks/useRefreshByUser';
import { fetchMovies, Movie } from '../utils/api';
import { useRefreshOnFocus } from '../hooks/useRefreshOnFocus';
import { MovieListItem } from '../components/organisms';
import { RootViewMlc, Divider } from '../components/molecules';
import { ViewAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';
import { ThemeProvider } from '../assets/theme';
import { LoadingIndicator } from '../components/organisms/LoadingIndicator';
import { ErrorMessage } from '../components/organisms/ErrorMessage';


const RnQueryPage: React.FC = () => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      mainView: { marginTop: 20, width: theme.layout.window.contentWidth, flex: 1 },
      divider: { width: '100%', height: 1, backgroundColor: theme.palette.grey[600] },
    }), [theme]
  );

  // *************************************************************************************************************************

  const { isLoading, error, data, refetch } = useQuery<Movie[], Error>(
    ['movies'],
    fetchMovies,
  );
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
  useRefreshOnFocus(refetch);


  const onListItemPress = useCallback((movie: any) => {
    console.log('movie' + JSON.stringify(movie));
  }, []);


  const renderItem = useCallback(({ item }: any) => {
    return <MovieListItem item={item} onPress={onListItemPress} />;
  }, [onListItemPress]);

  if (isLoading) { return <LoadingIndicator />; }

  if (error) { return <ErrorMessage message={error.message} />; }



  return (
    <RootViewMlc isScrollView={false}>
      <InfoView style={{}}
        title={'React-Query'}
        contents={'React Query는 서버 데이터 관리를 위해 사용. 데이터 가져오기, 캐싱, 상태 관리를 간단하게 처리해주며, 서버 데이터와의 실시간 동기화를 쉽게 관리할 수 있는 라이브러리.'} />


      <ViewAtom style={[styles.mainView]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={() => { return <Divider />; }}
          refreshControl={
            <RefreshControl
              refreshing={isRefetchingByUser}
              onRefresh={refetchByUser}
            />
          }
        />
      </ViewAtom>
    </RootViewMlc>
  );
};

export default RnQueryPage;
