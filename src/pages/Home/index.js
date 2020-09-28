import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Icon name="menu" color="#000" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={styles.headerText}>Home</Text>
            </View>
        </View>
    );
}
