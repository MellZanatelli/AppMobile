import { React } from 'react'
import { View, Text, Image, ImageBackground } from "react-native"
import { Pontinhos } from '../../components/pontinhos'
import { Fundo } from '../../components/fundo'
import { styles } from "./styles"

export function Tela1() {

    return (
        <Fundo>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.h3}>
                        Bem-vindo ao
                    </Text>
                    <Image style={styles.titulo} source={require('../../assets/Aquarium.png')} />
                </View>
                <Text style={styles.h3}>
                    Descubra como criar e cuidar de seu próprio ecossistema aquático!
                </Text>
                <Image style={styles.img} source={require('../../assets/ecossistema.png')} />
                <View style={styles.pontos}>
                    <Pontinhos onPressP={() => setPagina(1)} cor={true} />
                    <Pontinhos onPressP={() => setPagina(2)} cor={false} />
                    <Pontinhos onPressP={() => setPagina(3)} cor={false} />
                    <Pontinhos onPressP={() => setPagina(4)} cor={false} />
                </View>
            </View>
        </Fundo>
    )
}