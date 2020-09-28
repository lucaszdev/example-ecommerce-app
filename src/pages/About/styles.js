import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textmain: {
        fontSize: 25,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    textversion: {
        fontSize: 20,
        color: "#696969",
        paddingBottom: 25
    },
    textcopyright: {
        fontSize: 20,
        color: "#696969",
        paddingTop: 25,
        paddingBottom: 40
    },
    licensebutton: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5
    },
    licensetext: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
