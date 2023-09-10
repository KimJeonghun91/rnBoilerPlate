import React, { useMemo } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { Grid, GridFixedItem, RootViewMlc } from '../components/molecules';
import { ThemeProvider } from '../assets/theme';
import { ViewAtom, TextAtom } from '../components/atoms';
import { InfoView } from '../components/organisms';
import { toggleMode } from '../state/redux/themeSlice';
import { useThemeStore } from '../state/zustand/Store';
import { useAppDispatch } from '../state/redux/Store';
import * as IF from '../utils/InterFace';
import Config from '../assets/constants/Config';


const EventLoop = () => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            cBg: { width: '100%', paddingVertical: 15, justifyContent: 'center', alignItems: 'center' },
            cBgRow: { width: '100%', paddingVertical: 15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
            sBg: { flex: 1, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' },
            cTxt: { textAlign: 'center', marginVertical: 5 },
            h50: { height: 30 },
            dnBox: { marginTop: 30, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' },
            dnSwitch: { marginLeft: 5 },
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }), [theme]
    );
    const dispatch = useAppDispatch();
    const toggleModeZs = useThemeStore((state) => state.toggleMode);
    let gState: IF.TGlobalState = Config.GLOBAL_STATE;


    return (
        <RootViewMlc>
            <InfoView style={{}}
                title={'ThemeProvider'}
                contents={'ThemeProvider를 import해서 사용가능 합니다.\nRedux와 같은 전역 관리 도구를 사용해 전역으로 관리되며, 변경시 즉시 레이아웃에도 반영됩니다.\n"src/assets/theme" 경로에서 커스텀할 수 있습니다.'}>
                <ViewAtom style={styles.dnBox}>
                    <TextAtom>DayNight 변경</TextAtom>
                    <Switch
                        style={styles.dnSwitch}
                        trackColor={{ false: theme.palette.grey[500], true: theme.palette.grey[300] }}
                        thumbColor={theme.currentMode === 'light' ? theme.palette.primary.light : theme.palette.grey[300]}
                        ios_backgroundColor={theme.palette.grey[300]}
                        onValueChange={() => {
                            if (gState === 'redux') {
                                dispatch(toggleMode());
                            } else if (gState === 'zustand') {
                                toggleModeZs();
                            }
                        }}
                        value={theme.currentMode === 'light' ? true : false}
                    />
                </ViewAtom>
            </InfoView>


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

export default EventLoop;
