import {Alert, Image, Pressable, StyleSheet, View} from 'react-native';
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {useEffect} from "react";

type  ImageInputPropsType = {
    imageUri?: string
    onChangeImage: (uri: string) => void
}

export const ImageInput = ({imageUri, onChangeImage}: ImageInputPropsType) => {

    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!result.granted) {
            alert("Yon need to enable permission")
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled) {
                onChangeImage(result.uri)
            }

        } catch (error) {
            console.log("Error reading an image", error)
        }
    }

    const handlePress = () => {
        if (!imageUri) selectImage()
        else Alert.alert("Delete", "Are you sure to delete image?", [
            {text: "Yes", onPress: () => onChangeImage(imageUri)},
            {text: "No"}
        ])
    }

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name={"camera"} size={40} color={colors.medium}/>}
                {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",

    }
});
