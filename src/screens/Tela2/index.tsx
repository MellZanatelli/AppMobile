import React from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import { styles } from "./styles"

export function Tela2() {

    const bolhas = require('../../assets/bolhas.png')

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={bolhas} >
                <Text style={styles.h4}>
                    Descubra qual aquário se adequa melhor às espécies que deseja cuidar!
                </Text>
            </ImageBackground>
            <Image source={require('../../assets/aquario.png')}/>
            <Text style={styles.h4}>
                Ou então, descubra quais espécies podem dar vida ao aquário que já possui!
            </Text>
        </View>
    )
}