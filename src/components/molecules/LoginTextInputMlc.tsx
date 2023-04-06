import { StyleSheet, TextInputProps } from "react-native";
import TextInputAtom from "../atoms/TextInputAtom";
import ViewAtom from "../atoms/ViewAtom";
import { ThemeProvider } from "../../assets/theme";

type RootViewMlcProps = TextInputProps & {};

const RootViewMlc = ({ ...props }: RootViewMlcProps) => {
    const theme = ThemeProvider();

    return (
        <ViewAtom style={[styles.inputWraper, { marginTop: 10, borderColor: theme.palette.grey[500] }]}>
            <TextInputAtom
                {...props}
                style={styles.tiLogin} />
        </ViewAtom>
    )
};

RootViewMlc.defaultProps = {
    style: {}, // 디폴트
};

const styles = StyleSheet.create({
    tiLogin: { flex: 1, paddingLeft: 10, color: 'black' },
    inputWraper: { width: 340, paddingVertical: 3, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1 },
});
export default RootViewMlc;