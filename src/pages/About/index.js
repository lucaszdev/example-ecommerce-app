import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.textmain}>ExApp</Text>
            <Text style={styles.textversion}>Version 1.0.0</Text>
            <IconSimpleLineIcons
                name="info"
                size={50}
                color="#000"
            />
            <Text style={styles.textcopyright}>
                <IconAntDesign name="copyright" size={15} color="#696969" />
                {" 2020 - 2020 ExApp Inc."}
            </Text>
            <TouchableOpacity
                style={styles.licensebutton}
                onPress={() => Linking.openURL("https://github.com/lucaszdev?tab=repositories")}
            >
                <Text style={styles.licensetext}>LICENÇAS</Text>
            </TouchableOpacity>
        </View>
    );
}
