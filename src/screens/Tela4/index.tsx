import React from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Pontinhos } from '../../components/pontinhos'
import { Fundo } from '../../components/fundo'

export function Tela2() {

    const bolhas = require('../../assets/bolhas.png')

    return (
        <View style={styles.container}>
            <View style={styles.bub}>
                <ImageBackground source={bolhas} >
                    <Text style={styles.buble}>
                        Descubra qual aquário se adequa melhor às espécies que deseja cuidar!
                    </Text>
                </ImageBackground>
            </View>
            <Image style={styles.img} source={require('../../assets/aquario.png')} />
            <Text style={styles.h4}>
                Ou então, descubra quais espécies podem dar vida ao aquário que já possui!
            </Text>
            <View style={styles.pontos}>
                <Pontinhos onPressP={() => setPagina(1)} cor={false} />
                <Pontinhos onPressP={() => setPagina(2)} cor={false} />
                <Pontinhos onPressP={() => setPagina(3)} cor={false} />
                <Pontinhos onPressP={() => setPagina(4)} cor={true} />
            </View>
        </View>
    )
}