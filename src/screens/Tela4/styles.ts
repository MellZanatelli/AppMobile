import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h2: {
        color: '#ffff',
        fontSize: 60,
        textAlign: 'center',
        padding: 20,
    },
    pontos: {
        padding: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    fim: {
        padding: 20,
    },
    bot: {
        padding: 20,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    com: {
        color: '#2E2454',
        fontSize: 30,
    },
    img: {
        padding: 10,
    },
    txt: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub: {
        fontSize: 25,
    }
})