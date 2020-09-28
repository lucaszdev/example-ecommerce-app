import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        height: 46,
        backgroundColor: '#f5f5f5',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    touchableopacity: {
        backgroundColor: '#000',
        height: 46,
        alignSelf: 'stretch',
        borderRadius: 4,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableopacitytext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    textmain: {
        fontSize: 50,
        fontWeight: 'bold',
    }
});
