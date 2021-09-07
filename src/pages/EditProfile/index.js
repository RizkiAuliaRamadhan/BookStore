import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, responsiveWidth, fonts, responsiveHeight } from '../../utils'
import { Input, Jarak, Select, Tombol } from '../../components'
import { dummyProfile } from '../../data'

const EditProfile = ({ navigation }) => {
    const [kota, setKota] = useState([
        { label: "Banjarnegara", value: "banjarnegara" },
        { label: "Cilacap", value: "cilacap" },
    ])
    const [provinsi, setProvinsi] = useState([
        { label: "Jawa Tengah", value: "jawaTengah" },
        { label: "Jakarta", value: "jakarta" },
    ])
    const [profile, setProfile] = useState(dummyProfile[0])

    const [valueKota, setValueKota] = useState(null);
    const [valueProvinsi, setValueProvinsi] = useState(null);

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
                    <Text style={styles.textJudul}>Edit Profile</Text>
                </View>
                <Jarak height={5} />
                <Input label="Nama" value={profile.nama} />
                <Input label="No Hanphone" value={profile.noHp} />
                <Input label="Email" value={profile.email} />
                <View style={styles.row}>
                    <Select label="Kota" items={kota} setItems={setKota} value={valueKota} setValue={setValueKota} placeholder={profile.kota} width={responsiveWidth(160)} />
                    <Select label="Provinsi" items={provinsi} setItems={setProvinsi} value={valueProvinsi} setValue={setValueProvinsi} placeholder={profile.provinsi} width={responsiveWidth(160)} />
                </View>
                <Input label="Alamat" value={profile.alamat} textArea={true} line={4} />
                <View style={styles.row1}>
                    <Image source={profile.avatar} style={styles.image} />
                    <TouchableOpacity style={styles.tombol}>
                        <Text style={styles.textTombol}>Ganti Foto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EditProfile

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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    tombol: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 5
    },
    textTombol: {
        color: Colors.white,
        fontFamily: fonts.primary.reguler,
        fontSize: 12
    }
})
