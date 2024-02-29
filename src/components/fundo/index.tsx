import React from "react"
import { ImageBackground, View } from "react-native"
import { styles } from "./styles"

export function Fundo({children}:any) {
    const mar = require('../../assets/fundo-mar.png')

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={mar}>
                {children}
            </ImageBackground>
        </View>
    )
}