import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../utils'

const Line = () => {
    return (
        <View style={styles.line} />
    )
}

export default Line

const styles = StyleSheet.create({
    line: {
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.gray
    }
})
