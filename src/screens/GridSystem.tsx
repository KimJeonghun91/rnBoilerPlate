import React, {  useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Grid, GridItem, RootViewMlc } from '../components/molecules';
import { ThemeProvider } from "../assets/theme";
import { TextAtom, ViewAtom } from "../components/atoms";



const GridSystem = () => {
    const theme = ThemeProvider();

    return (
        <RootViewMlc>
            <ViewAtom style={{ width: 200, backgroundColor: theme.palette.background.neutral }}>
                <Grid rowGap={15} columnGap={0}>
                    <GridItem size={6}>
                        <ViewAtom style={{ backgroundColor: 'red', height: 50 }}>
                            <TextAtom>6/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={5}>
                        <ViewAtom style={{ backgroundColor: 'green', height: 50 }}>
                            <TextAtom>5/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={1}>
                        <ViewAtom style={{ backgroundColor: 'blue', height: 50 }}>
                            <TextAtom>1/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={4}>
                        <ViewAtom style={{ backgroundColor: 'yellow', height: 50 }}>
                            <TextAtom>4/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={8}>
                        <ViewAtom style={{ backgroundColor: 'orange', height: 50 }}>
                            <TextAtom>8/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={10}>
                        <ViewAtom style={{ backgroundColor: 'purple', height: 50 }}>
                            <TextAtom>10/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                </Grid>
            </ViewAtom>

            <ViewAtom style={{ marginTop: 20, backgroundColor: theme.palette.background.neutral }}>
                <Grid rowGap={15} columnGap={0}>
                    <GridItem size={6}>
                        <ViewAtom style={{ backgroundColor: 'red', height: 50 }}>
                            <TextAtom>6/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={5}>
                        <ViewAtom style={{ backgroundColor: 'green', height: 50 }}>
                            <TextAtom>5/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={1}>
                        <ViewAtom style={{ backgroundColor: 'blue', height: 50 }}>
                            <TextAtom>1/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={4}>
                        <ViewAtom style={{ backgroundColor: 'yellow', height: 50 }}>
                            <TextAtom>4/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={8}>
                        <ViewAtom style={{ backgroundColor: 'orange', height: 50 }}>
                            <TextAtom>8/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                    <GridItem size={10}>
                        <ViewAtom style={{ backgroundColor: 'purple', height: 50 }}>
                            <TextAtom>10/12</TextAtom>
                        </ViewAtom>
                    </GridItem>
                </Grid>
            </ViewAtom>
        </RootViewMlc>
    )
}
export default GridSystem;