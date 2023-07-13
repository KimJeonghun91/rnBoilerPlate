import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Grid, GridFixedItem, RootViewMlc } from '../components/molecules';
import { ThemeProvider } from '../assets/theme';
import { TextAtom, ViewAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';


const GridSystem = () => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            h50: { height: 50 },
            w200: { width: 200 },
            w100p: { width: '100%', marginTop: 20 }
        }), [theme]
    );

    // *************************************************************************************************************************

    return (
        <RootViewMlc>
            <InfoView style={{}}
                title={'<Grid> , <GridFixedItem>'}
                contents={'부모 View의 넓이에 맞춰 12개의 열로 나눠서 레이아웃을 빌드할 수 있습니다.'}>
            </InfoView>


            <ViewAtom style={[styles.w200, { backgroundColor: theme.palette.background.neutral, marginTop: 30 }]}>
                <Grid rowGap={15} columnGap={0}>
                    <GridFixedItem size={6}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.red[600] }]}>
                            <TextAtom>6/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={5}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.green[600] }]}>
                            <TextAtom>5/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={1}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.blue[600] }]}>
                            <TextAtom>1/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={4}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.yellow[600] }]}>
                            <TextAtom>4/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={8}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.orange[600] }]}>
                            <TextAtom>8/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={10}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.purple[600] }]}>
                            <TextAtom>10/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                </Grid>
            </ViewAtom>

            <ViewAtom style={[styles.w100p, { backgroundColor: theme.palette.background.neutral }]}>
                <Grid rowGap={15} columnGap={0}>
                    <GridFixedItem size={6}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.red[600] }]}>
                            <TextAtom>6/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={5}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.green[600] }]}>
                            <TextAtom>5/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={1}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.blue[600] }]}>
                            <TextAtom>1/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={4}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.yellow[600] }]}>
                            <TextAtom>4/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={8}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.orange[600] }]}>
                            <TextAtom>8/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                    <GridFixedItem size={10}>
                        <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.purple[600] }]}>
                            <TextAtom>10/12</TextAtom>
                        </ViewAtom>
                    </GridFixedItem>
                </Grid>
            </ViewAtom>
        </RootViewMlc>
    );
};

export default GridSystem;
