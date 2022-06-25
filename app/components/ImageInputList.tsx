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

    // onRemoveImage: (uri: string) => void
    // onAddImage: (uri: string) => void
}

// export const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}: ImageInputListPropsType) => {
export const ImageInputList = ({}: ImageInputListPropsType) => {
    const scrollView = useRef<ScrollView>(null);
    const images = useAppSelector(state => state.listingEditScreen.images)
    const dispatch = useAppDispatch()


    // const scrollEnd = () => {
    //   if (scrollView && scrollView.current) {
    //       scrollView.current.scrollToEnd({animated: true})
    //   }
    //
    // }

    // const scrollRef = React.createRef<ScrollView>();

    const onAddImage = (uri: string) => {
        dispatch(addImagesAC({uri}))
    }
    const onRemoveImage = (uri: string) => {
        dispatch(removeImagesAC({uri}))
    }


    
    return (
        <View>
            <ScrollView ref={scrollView} showsHorizontalScrollIndicator={false} horizontal
                        onContentSizeChange={() => scrollView.current?.scrollToEnd({animated: true})}>
                <View style={styles.container}>
                    {images.map((uri: string) =>
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
