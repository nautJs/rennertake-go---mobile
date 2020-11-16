import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Header({ title, showCancel = true, headerTransparent = false}) {
    const navigation = useNavigation();
    function handleGoBackToAppHomepage() {
        navigation.navigate('QRcode');
    }
    return (
        <View style={{ ...styles.container, backgroundColor: !headerTransparent && '#f9fafc'} }>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#000000"/>
            </BorderlessButton>
            <Text style={styles.title}>{title} </Text>
            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomepage}>
                    <Feather name="x" size={24} color="#ff669d"/>
                </BorderlessButton>
            ): (
                <View/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderBottomWidth: 2,
        borderColor: '#F1F1F1',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Lato_700Bold',
        color: '#00AE7C',
        fontSize: 22,
    }
})
