
import React, { useMemo, useCallback } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useInfiniteQuery, UseInfiniteQueryResult, useQueryClient } from '@tanstack/react-query';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchMovies, Movie, shuffleArray } from '../utils/api';
import { MovieListItem } from '../components/organisms';
import { RootViewMlc, Divider } from '../components/molecules';
import { ViewAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';
import { ThemeProvider } from '../assets/theme';
import * as IF from '../utils/InterFace';


type RnQueryPageProps = {
  navigation: StackNavigationProp<IF.RootStackParams>;
};

const RnQueryPage: React.FC<RnQueryPageProps> = ({ navigation }) => {
  const theme = ThemeProvider();
  const styles = useMemo(() => StyleSheet.create({
    mainView: { width: theme.layout.window.contentWidth, flex: 1 },
    divider: { width: '100%', height: 1, backgroundColor: theme.palette.grey[600] },
  }), [theme]);

  // ***************************************************************************************************

  const queryClient = useQueryClient();
  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    // isFetchingNextPage,
    isFetching,
    // refetch,
  }: UseInfiniteQueryResult<Response, Error> = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });


  const onListItemPress = useCallback((movie: Movie) => {
    navigation.navigate('RnQueryDetail', { movie, title: movie.title });
  }, [navigation]);


  const renderItem = useCallback(({ item }: { item: Movie }) => {
    return <MovieListItem item={item} onPress={onListItemPress} />;
  }, [onListItemPress]);


  const handleRefresh = async () => {
    shuffleArray();
    await queryClient.resetQueries(['movies']);
  };



  return (
    <RootViewMlc isScrollView={false}>
      <InfoView
        title={'React-Query'}
        contents={'React Query는 서버 데이터 관리를 위해 사용. 데이터 가져오기, 캐싱, 상태 관리를 간단하게 처리해주며, 서버 데이터와의 실시간 동기화를 쉽게 관리할 수 있는 라이브러리.'}
      />

      <ViewAtom style={styles.mainView}>
        <FlatList
          data={data?.pages.flatMap((page: any) => page.data) || []}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
          ItemSeparatorComponent={Divider}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={handleRefresh}
            />
          }
        />
      </ViewAtom>
    </RootViewMlc>
  );
};


export default RnQueryPage;
