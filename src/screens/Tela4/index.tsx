import React from "react"
import { View, Text, Button, TouchableOpacity, Image, Linking } from "react-native"
import { styles } from "./styles"
import { Pontinhos } from '../../components/pontinhos'
import { Fundo } from '../../components/fundo'
import { Page } from '../../../App'

export function Tela4({ setPagina }: Page) {

    const bolhas = require('../../assets/bolhas.png')

    return (
        <Fundo>
            <View style={styles.container}>
                <View style={styles.fim}>
                    <Text style={styles.h2}>
                        Tenha seu próprio mundinho dentro d’água, para amar e relaxar!
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Opção ainda não disponível!")} style={styles.bot}>
                    <Text style={styles.com}>Começar </Text>
                    <Image style={styles.img} source={require('../../assets/seta.png')} />
                </TouchableOpacity>
                <View style={styles.txt}>
                    <Text>Já tem uma conta?</Text>
                    <Text style={styles.sub}>Clique aqui para entrar</Text>
                </View>
            </View>
            <View style={styles.pontos}>
                <Pontinhos onPressP={() => setPagina(1)} cor={false} />
                <Pontinhos onPressP={() => setPagina(2)} cor={false} />
                <Pontinhos onPressP={() => setPagina(3)} cor={false} />
                <Pontinhos onPressP={() => setPagina(4)} cor={true} />
            </View>
        </Fundo>
    )
}