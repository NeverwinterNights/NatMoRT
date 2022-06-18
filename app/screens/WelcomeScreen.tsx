import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from "../components/AppButton";


export const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={5} source={require("../assets/background.jpg")} style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.title}>Sell What You Wanna Sell</Text>
            </View>
            <View style={{paddingHorizontal: 5, width: "100%"}}>
                <AppButton title={"Login"}/>
                <AppButton color={"secondary"} title={"Register"}/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15
    },
    title: {},
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
});
