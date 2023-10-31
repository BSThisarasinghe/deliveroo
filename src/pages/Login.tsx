import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    navigation: any
}

const Login = ({ navigation }: Props) => {
    const handleSignUp = () => {
        navigation.navigate('signup')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign up or log in</Text>
            <TouchableOpacity style={styles.facebookButton}>
                <Icon name="facebook" size={20} color="#fff" />
                <Text style={[styles.buttonText, { marginLeft: 10 }]}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <Icon name="google" size={20} color="#E87510" />
                <Text style={[styles.buttonText, { marginLeft: 10, color: '#000' }]}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appleButton}>
                <Icon name="apple" size={20} color="#fff" />
                <Text style={[styles.buttonText, { marginLeft: 10, color: '#fff' }]}>Continue with Apple</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}> ------------ OR ------------ </Text>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Icon name="envelope" size={20} color="#fff" />
                <Text style={styles.buttonText}>Continue with email</Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>By continuing you agree to our T&Cs. Please also check out our Privacy Policy. We use your data to offer you a personalised experience and to better understand and improve our services. For more information see here.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#000'
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#00b8a9',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        color: '#000'
    },
    button: {
        backgroundColor: '#00b8a9',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    textStyle: {
        color: '#000',
        margin: 20
    },
    smallText: {
        color: '#000',
        fontSize: 10,
        margin: 10
    },
    facebookButton: { backgroundColor: '#4c69ba', flexDirection: 'row', padding: 5, borderRadius: 5, justifyContent: 'space-around', alignItems: 'center', width: 250, marginBottom: 10 },
    googleButton: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#d8d8d8', flexDirection: 'row', padding: 5, borderRadius: 5, justifyContent: 'space-around', alignItems: 'center', width: 250, marginBottom: 10 },
    appleButton: { backgroundColor: '#000', flexDirection: 'row', padding: 5, borderRadius: 5, justifyContent: 'space-around', alignItems: 'center', width: 250, marginBottom: 30 }
});

export default Login;