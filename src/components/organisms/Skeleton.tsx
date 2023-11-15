import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, ViewStyle } from 'react-native';

const Skeleton: React.FC = () => {
  const shimmerValue = useRef(new Animated.Value(0)).current;

  const shimmerAnimation = () => {
    Animated.loop(
      Animated.timing(shimmerValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  useEffect(() => {
    shimmerAnimation();

    return () => {
      shimmerValue.stopAnimation();
    };
  });

  const shimmerStyle = {
    backgroundColor: shimmerValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(200, 200, 200, 0.3)', 'rgba(200, 200, 200, 0.1)'],
    }),
  };

  const renderShimmerItem = (getStyle: ViewStyle | ViewStyle[], key: string) => {
    const stylesArray = Array.isArray(getStyle) ? getStyle : [getStyle];
    return <Animated.View key={key} style={[...stylesArray, shimmerStyle]} />;
  };

  return (
    <View style={styles.container}>

      <View style={[styles.paddingBoxRow]}>
        {renderShimmerItem([styles.avatar], 'shimmerItem1')}
        {renderShimmerItem([styles.title, { width: 150 }], 'shimmerItem2')}
      </View>

      <View style={styles.paddingBox}>
        {renderShimmerItem([styles.title, { marginTop: 30 }], 'shimmerItem3')}
        {renderShimmerItem([styles.title, { marginTop: 10 }], 'shimmerItem4')}
        {renderShimmerItem([styles.baseBox, { height: 70, marginTop: 10 }], 'shimmerItem5')}
        {renderShimmerItem([styles.baseBox, { height: 70, marginTop: 10 }], 'shimmerItem6')}
      </View>

      {renderShimmerItem(styles.div, 'shimmerItem7')}


      <View style={styles.paddingBox}>
        {renderShimmerItem([styles.baseBox, { height: 600, marginTop: 20 }], 'shimmerItem8')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: '100%',
  },
  paddingBox: {
    paddingHorizontal: 20,
  },
  paddingBoxRow: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: { width: 80, height: 80, borderRadius: 45 },
  title: { height: 30, borderRadius: 5 },
  div: { width: '100%', height: 10, borderRadius: 5, marginTop: 25 },
  baseBox: { width: '100%', borderRadius: 12 },
});

export default Skeleton;
