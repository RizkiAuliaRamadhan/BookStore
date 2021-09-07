import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, fonts } from '../../../utils'

const CardAlamat = ({ data, navigation }) => {
    return (
        <View style={styles.card}>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.textBold}>Alamat Saya :</Text>
            </View>
            {data.map(value => {
                return (
                    <View key={value.id}>
                        <Text style={styles.text}>{value.alamat}</Text>
                        <Text style={styles.text}>{value.kota}</Text>
                        <Text style={styles.text}>{value.provinsi}</Text>
                        <TouchableOpacity style={styles.ubah} onPress={() => {navigation.navigate("EditProfile")}} >
                            <Text style={styles.textUbah}>Ubah Alamat</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export default CardAlamat

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5
    },
    textBold: {
        fontSize: 14,
        fontFamily: fonts.primary.semibold,
    },
    text: {
        fontSize: 12,
        fontFamily: fonts.primary.reguler
    },
    ubah: {
        alignItems: 'flex-end'
    },
    textUbah: {
        color: Colors.primary,
        fontSize: 12,
        fontFamily: fonts.primary.reguler
    }
})
