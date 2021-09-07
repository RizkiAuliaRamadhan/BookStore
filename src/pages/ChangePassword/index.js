import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Input, Tombol, Jarak } from '../../components'
import { responsiveWidth, Colors, fonts } from '../../utils'


const ChangePassword = ({ navigation }) => {
    const [passwordLama, setPasswordLama] = useState("12345678")
    const [passwordBaru, setPasswordBaru] = useState("")
    const [konfirmasiPasswordBaru, setKonfirmasiPasswordBaru] = useState("")

    const securePassword = () => {
        if(passwordBaru !== "" && konfirmasiPasswordBaru !== ""){
            if(passwordBaru === konfirmasiPasswordBaru){
                Alert.alert('Selamat', 'Selamat Password Telah Diganti')
                setPasswordLama(konfirmasiPasswordBaru)
                setTimeout(() => {
                    navigation.goBack()
                }, 1000)
            }else{
                Alert.alert('Gagal', "Silahkan Coba Lagi!")
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Tombol
                    icon="back"
                    color={Colors.primary}
                    padding={2}
                    radius={5}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ marginHorizontal: responsiveWidth(30) }} showsVerticalScrollIndicator={false} >
                <View style={styles.textWrapp}>
                    <Text style={styles.textJudul}>Change Password</Text>
                </View>
                <Jarak height={10} />
                <Input label="Password Lama" value={passwordLama} secureTextEntry={true} />
                <Input label="Password Baru" value={passwordBaru} onChangeText={setPasswordBaru} secureTextEntry={true} />
                <Input label="Konfirmasi Password Baru" value={konfirmasiPasswordBaru} onChangeText={setKonfirmasiPasswordBaru} secureTextEntry={true} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.tombol} onPress={() => { securePassword() }}>
                    <Text style={styles.textTombol}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    back: {
        position: 'absolute',
        padding: 5,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        top: 10,
        left: 17,
        zIndex: 1
    },
    textWrapp: {
        alignItems: 'center',
        padding: 10,
    },
    textJudul: {
        fontFamily: fonts.primary.semibold,
        fontSize: 18,
    },
    footer: {
        marginHorizontal: responsiveWidth(30),
        position: 'absolute',
        bottom: 10,
        right: 0,
        left: 0,
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 14,
    },
    tombol: {
        padding: 10,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    textTombol: {
        color: Colors.white,
        fontFamily: fonts.primary.bold,
    },
})
