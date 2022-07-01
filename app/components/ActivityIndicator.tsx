import React from 'react';
import LottieView from 'lottie-react-native';


type ActivityIndicatorPropsType = {
    visible: boolean
}

export const ActivityIndic = ({visible = false}: ActivityIndicatorPropsType) => {
    if (!visible) return null
    return <LottieView loop autoPlay source={require("../assets/animation/load.json")}/>
};


