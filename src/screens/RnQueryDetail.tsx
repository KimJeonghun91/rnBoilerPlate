import * as React from 'react';
import { View, RefreshControl, StyleSheet, ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { LoadingIndicator } from '../components/organisms/LoadingIndicator';
import { ErrorMessage } from '../components/organisms/ErrorMessage';
import { useRefreshByUser } from '../hooks/useRefreshByUser';
import { MovieDetails, fetchMovie } from '../utils/api';
import * as IF from '../utils/InterFace';
import { ImageAtom } from '../components/atoms';


type RnQueryDetailProps = {
  navigation: StackNavigationProp<IF.RootStackParams>;
  route: RouteProp<IF.RootStackParams, 'RnQueryDetail'>;
};

export default function RnQueryDetail({ route }: RnQueryDetailProps) {
  const { isLoading, error, data, refetch } = useQuery<MovieDetails, Error>(
    ['movie', route.params.movie.title],
    () => fetchMovie(route.params.movie.title),
    { initialData: route.params.movie as MovieDetails },
  );

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

  if (isLoading) { return <LoadingIndicator />; }
  if (error) { return <ErrorMessage message={error.message} />; }
  if (!data) { return null; }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefetchingByUser}
          onRefresh={refetchByUser}
        />
      }
    >
      <View style={styles.titleRow}>
        <Text>
          {data.title} ({data.year})
        </Text>
      </View>
      {data.info ? (
        <>
          <ImageAtom style={styles.imgSt} source={{ uri: data?.info?.image_url }} resizeMode="contain" />

          <View style={styles.infoRow}>
            <Text>{data.info.plot}</Text>
          </View>
          <View style={styles.actorsRow}>
            <Text>
              {data.info.actors.slice(0, -1).join(', ') +
                ' or ' +
                data.info.actors.slice(-1)}
            </Text>
          </View>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgSt: { width: '100%', height: 250 },
  titleRow: {
    flexDirection: 'row',
    margin: 20,
  },
  infoRow: {
    flexDirection: 'row',
    margin: 20,
  },
  actorsRow: {
    flexDirection: 'column',
    margin: 20,
    marginTop: 10,
  },
});
