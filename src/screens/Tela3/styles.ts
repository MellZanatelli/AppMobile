import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bub: {
        padding: 5,
        alignSelf: 'stretch',
    },
    buble: {
        fontSize: 30,
        color: '#2E2454',
        textAlign: 'center',
        padding: 42,        
    },
    h4: {
        color: '#ffff',
        fontSize: 30,
        textAlign: 'center',
        padding: 15,
    },
    img: {
        width: 350,
        padding: 80,
        height: 'auto',
    },
    pontos: {
        padding: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
})