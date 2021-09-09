import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors, fonts } from '../../../utils'

const Input = ({ label, onChangeText, value, textArea, line, secureTextEntry = false, keyboardType = 'default' }) => {
    if (textArea) {
        return (
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>{label} :</Text>
                <TextInput onChangeText={onChangeText} value={value} style={styles.inputArea} multiline={textArea} numberOfLines={line} />
            </View>
        )
    } else {
        return (
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>{label} :</Text>
                <TextInput onChangeText={onChangeText} value={value} style={styles.input} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
            </View>
        )
    }
}

export default Input

const styles = StyleSheet.create({
    inputWrapper: {
        marginVertical: 2.5,
    },
    text: {
        fontFamily: fonts.primary.semibold,
        fontSize: 14
    },
    inputArea: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        textAlignVertical: 'top',
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: Colors.gray2
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        height: 40,
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: Colors.gray2
    }
})
