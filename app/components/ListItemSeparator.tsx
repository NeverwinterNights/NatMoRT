import {StyleSheet, View} from 'react-native';
import colors from "../config/colors";

type ListItemSeparatorPropsType = {}

export const ListItemSeparator = ({}: ListItemSeparatorPropsType) => {
    return (
        <View style={styles.container}/>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    }
});
