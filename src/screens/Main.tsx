import React, { } from 'react';
import { StyleSheet } from 'react-native';
import { Grid, GridFlexItem, RootViewMlc } from '../components/molecules';
import { CardView } from '../components/organisms';
import { TextAtom, ViewAtom } from '../components/atoms';
import { ThemeProvider } from '../assets/theme';



const Main = () => {
    const theme = ThemeProvider();

    return (
        <RootViewMlc style={{}}>
            <ViewAtom style={[styles.mainView, { width: theme.layout.window.contentWidth }]}>
                <Grid rowGap={15} columnGap={15}>
                    <GridFlexItem size={1}>
                        <CardView title={'Grid'} subTitle={'그리드 레이아웃'}>
                            <ViewAtom>
                                <TextAtom>5/12</TextAtom>
                            </ViewAtom>
                        </CardView>
                    </GridFlexItem>

                    <GridFlexItem size={1}>
                        <CardView borderRadius={5}>
                            <TextAtom>5/12</TextAtom>
                        </CardView>
                    </GridFlexItem>
                </Grid>
            </ViewAtom>
        </RootViewMlc>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginTop: 20,
    },
});

export default Main;
