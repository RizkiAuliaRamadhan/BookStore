import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListHistori, Tombol } from '../../components'
import { DummyCart } from '../../data/DummyCart'
import { Colors, fonts, responsiveWidth, responsiveHeight } from '../../utils'


const Histori = ({navigation}) => {
    const [pesanan, setPesanan] = useState(DummyCart)
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
                    <Text style={styles.textJudul}>Histori Pemesanan</Text>
                </View>
                <ListHistori data={pesanan} />
            </View>
        </View>
    )
}

export default Histori

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
})
