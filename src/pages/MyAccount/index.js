import React from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Platform } from 'react-native';

import styles from './styles';

export default function MyAccount({ navigation }) {
    
    return (
        <KeyboardAvoidingView behavior="padding" enabled={Platform.OS == 'ios'} style={styles.container}>
            <Text style={styles.textmain}>Cadastre-se</Text>
            
            <TextInput style={styles.textinput}
                placeholder="Email"
                placeholderTextColor="#999"
            />
            
            <TextInput style={styles.textinput}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
            />

            <TextInput style={styles.textinput}
                placeholder="Repetir senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
            />
            
            <TouchableOpacity
                onPress={() => alert("Cadastro feito com sucesso")}
                style={styles.touchableopacity}
            >
                <Text style={styles.touchableopacitytext}>Finalizar cadastro</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
