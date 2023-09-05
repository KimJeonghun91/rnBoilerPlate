import React, { useMemo } from 'react';
import { ViewProps, StyleSheet, StyleProp, ViewStyle, Modal } from 'react-native';
import { ThemeProvider } from '../../assets/theme';
import { TextAtom, TouchAbleOpAtom, ViewAtom } from '../atoms';


type ModalOrgsProps = ViewProps & {
  isVisible: boolean;
  modalPosition?: 'center' | 'flex-end' | 'flex-start';
  isBackgroundTouchClose?: boolean;
  callBackFn: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
};


/**
 * 커스텀 모달 컴포넌트
*/
const ModalOrgs: React.FC<ModalOrgsProps> = ({
  isVisible = false,
  modalPosition = 'center',
  isBackgroundTouchClose = false,
  callBackFn = () => { },
  ...props
}: ModalOrgsProps) => {

  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      bgView: { position: 'absolute', width: '100%', height: '100%', backgroundColor: theme.palette.common.modalBg, top: 0, left: 0 },
      centeredView: { flex: 1, marginTop: 22, justifyContent: modalPosition },
      modalWrapper: { marginHorizontal: 10, marginBottom: 15 },
      modalView: {
        backgroundColor: theme.palette.common.white,
        borderRadius: 12,
        padding: 35,
        alignItems: 'center',
        shadowColor: theme.palette.common.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalBottomView: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
      btnCancleView: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 14, backgroundColor: theme.palette.grey[500], borderRadius: 12 },
      btnConfirmView: { flex: 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10, paddingVertical: 14, backgroundColor: theme.palette.success.main, borderRadius: 12 },
      txtConfirm: { color: theme.palette.common.white, fontWeight: 'bold' },
      txtCancle: { color: theme.palette.common.white },
    }), [theme, modalPosition]
  );


  if (!isVisible) { return null; }

  return (
    <ViewAtom {...props} style={[styles.bgView]} >
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => { callBackFn(false); }}
      >
        <TouchAbleOpAtom activeOpacity={1} style={styles.centeredView} onPress={() => { if (isBackgroundTouchClose) { callBackFn(false); } }}>
          <ViewAtom style={styles.modalWrapper}>

            <ViewAtom style={styles.modalView}>
              <TouchAbleOpAtom onPress={() => callBackFn(false)}>
                <TextAtom style={{}}>Hello World!</TextAtom>
              </TouchAbleOpAtom>
            </ViewAtom>


            <ViewAtom style={styles.modalBottomView}>
              <TouchAbleOpAtom style={styles.btnCancleView} onPress={() => callBackFn(false)}>
                <TextAtom style={styles.txtCancle}>취 소</TextAtom>
              </TouchAbleOpAtom>

              <TouchAbleOpAtom style={styles.btnConfirmView} onPress={() => callBackFn(false)}>
                <TextAtom style={styles.txtConfirm}>확 인</TextAtom>
              </TouchAbleOpAtom>
            </ViewAtom>
          </ViewAtom>
        </TouchAbleOpAtom>
      </Modal>
    </ViewAtom>
  );
};

ModalOrgs.defaultProps = {
  style: {}, // 디폴트
};


export default ModalOrgs;
