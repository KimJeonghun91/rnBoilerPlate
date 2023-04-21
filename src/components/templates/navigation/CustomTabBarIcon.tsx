import React from 'react';
import { StyleSheet, Image } from 'react-native';

const CustomTabBarIcon = ({ focused, source, theme }: any) => {

    return (
        <Image
            style={[styles.imgSize, { tintColor: focused ? theme.palette.primary.main : theme.palette.grey[500] }]}
            resizeMode={'contain'}
            source={source}
        />
    );
};

const styles = StyleSheet.create({
    imgSize: {
        width: 32, height: 32,
    },
});

export default CustomTabBarIcon;
