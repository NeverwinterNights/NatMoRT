import {ScrollView, StyleSheet, View} from 'react-native';
import {ImageInput} from "./ImageInput";
import React, {useRef} from "react";
import {useAppDispatch, useAppSelector} from "../store/store";
import {addImagesAC, removeImagesAC} from "../store/ListingEditReducer";


// type  ImageInputListPropsType = {
//     imageUris: []
//     onRemoveImage: (uri: string) => void
//     onAddImage: (uri: string) => void
// }
type  ImageInputListPropsType = {

    onRemoveImg: (uri: string) => void
    onAddImg: (uri: string) => void
}

// export const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}: ImageInputListPropsType) => {
export const ImageInputList = ({onRemoveImg, onAddImg}: ImageInputListPropsType) => {
    const scrollView = useRef<ScrollView>(null);
    const imagesData = useAppSelector(state => state.listingEditScreen.images)
    const dispatch = useAppDispatch()




    const onAddImage = (uri: string) => {
        onAddImg(uri)
        dispatch(addImagesAC({uri}))
    }
    const onRemoveImage = (uri: string) => {
        onRemoveImg(uri)
        dispatch(removeImagesAC({uri}))
    }


    
    return (
        <View>
            <ScrollView ref={scrollView} showsHorizontalScrollIndicator={false} horizontal
                        onContentSizeChange={() => scrollView.current?.scrollToEnd({animated: true})}>
                <View style={styles.container}>
                    {imagesData.map((uri: string) =>
                        <View key={uri} style={styles.image}>
                            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)}/>
                        </View>
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)}/>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        marginRight: 10
    }
});
