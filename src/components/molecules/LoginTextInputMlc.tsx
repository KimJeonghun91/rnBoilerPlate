import { StyleSheet, TextInputProps } from "react-native";
import Colors from "../../assets/constants/Colors";
import TextInputAtom from "../atoms/TextInputAtom";
import ViewAtom from "../atoms/ViewAtom";

type RootViewMlcProps = TextInputProps & {
};

const RootViewMlc = ({ ...props }: RootViewMlcProps) => {
    return (
        <ViewAtom style={[styles.inputWraper, { marginTop: 10, }]}>
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
    inputWraper: { width: 340, paddingVertical: 3, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.gray01 },
});
export default RootViewMlc;