import {ScrollView, StyleSheet, View} from 'react-native';
import {ImageInput} from "./ImageInput";
import React, {useRef} from "react";


type  ImageInputListPropsType = {
    imageUris: []
    onRemoveImage: (uri: string) => void
    onAddImage: (uri: string) => void
}

export const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}: ImageInputListPropsType) => {
    const scrollView = useRef<ScrollView>(null);

    // const scrollEnd = () => {
    //   if (scrollView && scrollView.current) {
    //       scrollView.current.scrollToEnd({animated: true})
    //   }
    //
    // }

    // const scrollRef = React.createRef<ScrollView>();

    return (
        <View>
            <ScrollView ref={scrollView} showsHorizontalScrollIndicator={false} horizontal
                        onContentSizeChange={() => scrollView.current?.scrollToEnd({animated: true})}>
                <View style={styles.container}>
                    {imageUris.map((uri: string) =>
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
