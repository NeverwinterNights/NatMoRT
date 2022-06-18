import {Platform, StyleSheet, Text, TextProps} from 'react-native';

type AppTextPropsType = {
    children: string
    style?: Object
}

export const AppText = ({children, style, ...restProps}: AppTextPropsType) => {
    return (
        <Text style={[styles.text, style]} {...restProps}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 18,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 16,
                fontFamily: "Roboto",
            }
        })
    }
});
