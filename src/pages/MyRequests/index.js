import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import games from './requests.json';

export default function MyRequests({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Meus pedidos</Text>
    <Text style={styles.headertotaltext}>Total de <Text style={styles.headertotaltextbold}>{games.length} items</Text>.</Text>
            </View>

            <FlatList
                style={styles.myrequestslist}
                data={games}
                keyExtractor={myrequests => String(myrequests.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: myrequests }) => (
                    <View style={styles.myrequests}>
                        <View style={styles.containerproperty}>
                            <View>
                                <Text style={styles.myrequestsproperty}>Item:</Text>
                                <Text style={styles.myrequestsvalue}>{myrequests.name}</Text>
                            </View>
                            
                            <View>
                                <Text style={styles.myrequestsproperty}>Formato:</Text>
                                <Text style={styles.myrequestsvalue}>{myrequests.format}</Text>
                            </View>
                        </View>

                        <Text style={styles.myrequestsproperty}>Valor:</Text>
                        <Text style={styles.myrequestsvalue}>
                            {'R$ ' + myrequests.value.toFixed(2).replace('.',',')}
                        </Text>
                        
                        <TouchableOpacity style={styles.detailsbutton}>
                            <View style={styles.myrequestscontainerbutton}>
                                <Text style={styles.detailsbuttontext}>Ver mais detalhes da compra</Text>
                                <Feather name="arrow-right" size={16} color="#000" />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}
