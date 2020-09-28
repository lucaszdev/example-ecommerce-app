import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    headertext: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    headertotaltext: {
        fontSize: 16,
        color: '#737380'
    },
    headertotaltextbold: {
        fontWeight: 'bold'
    },
    myrequestslist: {
        marginTop: 40
    },
    containerproperty: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    myrequests: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16
    },
    myrequestsproperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: 'bold'
    },
    myrequestsvalue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsbutton: {
        flexDirection: 'row',
    },
    myrequestscontainerbutton: {
        flex: 1,
        padding: 10,
        borderColor: '#151515',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsbuttontext: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
