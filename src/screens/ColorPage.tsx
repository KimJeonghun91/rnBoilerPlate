import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, GridFixedItem, RootViewMlc } from '../components/molecules';
import { ThemeProvider } from '../assets/theme';
import { ViewAtom, TextAtom } from '../components/atoms';



const EventLoop = () => {
    const theme = ThemeProvider();

    return (
        <RootViewMlc>
            <ViewAtom style={[styles.cBg, { backgroundColor: theme.palette.background.default }]}>
                <TextAtom style={[styles.cTxt, { color: theme.palette.text.primary }]}>text.primary</TextAtom>
            </ViewAtom>
            <ViewAtom style={[styles.cBg, { backgroundColor: theme.palette.background.paper }]}>
                <TextAtom style={[styles.cTxt, { color: theme.palette.text.disabled }]}>text.disabled</TextAtom>
            </ViewAtom>
            <ViewAtom style={[styles.cBg, { backgroundColor: theme.palette.background.neutral }]}>
                <TextAtom style={[styles.cTxt, { color: theme.palette.text.secondary }]}>text.secondary</TextAtom>
            </ViewAtom>


            <ViewAtom style={[styles.cBgRow, { backgroundColor: theme.palette.background.neutral }]}>
                <ViewAtom style={styles.sBg}>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[100] }]}>Grey100</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[200] }]}>Grey200</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[300] }]}>Grey300</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[400] }]}>Grey400</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[500] }]}>Grey500</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[600] }]}>Grey600</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[700] }]}>Grey700</TextAtom>
                </ViewAtom>
                <ViewAtom style={styles.sBg}>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.primary.main }]}>primary.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.secondary.main }]}>secondary.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.success.main }]}>success.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.warning.main }]}>warning.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.info.main }]}>info.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.error.main }]}>error.main</TextAtom>
                </ViewAtom>
            </ViewAtom>

            {/* <ViewAtom style={[styles.cBgRow, { backgroundColor: theme.palette.background.neutral }]}></ViewAtom> */}

            {
                [100, 200, 300, 400, 500, 600, 700, 800, 900].map((item: number, idx) => (
                    <Grid key={idx}>
                        <GridFixedItem size={2}>
                            <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.red[item] }]} />
                        </GridFixedItem>
                        <GridFixedItem size={2}>
                            <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.green[item] }]} />
                        </GridFixedItem>
                        <GridFixedItem size={2}>
                            <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.blue[item] }]} />
                        </GridFixedItem>
                        <GridFixedItem size={2}>
                            <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.yellow[item] }]} />
                        </GridFixedItem>
                        <GridFixedItem size={2}>
                            <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.orange[item] }]} />
                        </GridFixedItem>
                        <GridFixedItem size={2}>
                            <ViewAtom style={[styles.h50, { backgroundColor: theme.palette.purple[item] }]} />
                        </GridFixedItem>
                    </Grid>
                ))
            }

        </RootViewMlc>
    );
};


const styles = StyleSheet.create({
    cBg: { width: '100%', paddingVertical: 15, justifyContent: 'center', alignItems: 'center' },
    cBgRow: { width: '100%', paddingVertical: 15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    sBg: { flex: 1, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' },
    cTxt: { textAlign: 'center', marginVertical: 5 },
    h50: { height: 30 },
});

export default EventLoop;
