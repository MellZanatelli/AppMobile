import { View, Text, Image, ImageBackground } from "react-native"
import { styles } from "./styles"

export function Tela1() {

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.h3}>
                    Bem-vindo ao
                </Text>
                <Text style={styles.h1}>
                    Aqurium
                </Text>
            </View>
            <Text style={styles.h3}>
                Descubra como criar e cuidar de seu próprio ecossistema aquático!
            </Text>
            <Image source={require('../../assets/ecossistema.png')}/>
        </View>
    )
}