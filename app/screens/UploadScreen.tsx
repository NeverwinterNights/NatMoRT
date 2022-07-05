import {Modal, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from "../config/colors";
import LottieView from 'lottie-react-native';


type  UploadScreenPropsType = {
    progress: number
    visible: boolean
    onDone: () => void
}

export const UploadScreen = ({onDone, progress = 0, visible = false}: UploadScreenPropsType) => {


    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar width={200} progress={progress} color={colors.primary}/>) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        source={require("../assets/animation/done.json")}
                        style={styles.animation}
                        onAnimationFinish={onDone}
                    />)}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    animation: {
        width: 150
    }
});
