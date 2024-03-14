
import { ImageBackground, View } from "react-native"
import { styles } from "./styles"

interface Fund {
    children: React.ReactNode
}

export function Fundo({children}:Fund) {
    const mar = require('../../assets/fundo-mar.png')

    return(
        <View style={styles.fundo}>
            <ImageBackground style={styles.container} source={mar}>
                {children}
            </ImageBackground>
        </View>
    )
}