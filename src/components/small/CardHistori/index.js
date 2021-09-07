import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors, fonts, formatNumber, responsiveHeight, responsiveWidth } from '../../../utils'
import Jarak from '../Jarak'

const CardHistori = ({ data }) => {
    const ongkir = 30000
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.tanggalPemesanan}</Text>
            {data.pesanan.map((value, index) => {
                return (
                    <View style={styles.histori} key={index} >
                        <Text style={styles.text}>{index + 1}.</Text>
                        <Jarak width={10} />
                        <Image source={value.product.image} style={styles.image} resizeMode="contain" />
                        <Jarak width={10} />
                        <View style={styles.desc}>
                            <Text style={styles.text}>{value.product.name}</Text>
                            <Text style={styles.text2}>Rp. {formatNumber(value.product.harga)}</Text>
                            <Jarak height={5} />
                            <Text style={styles.text2}><Text style={styles.textBold}>Jumlah:</Text> {value.product.jumlah} pcs</Text>
                            <Text style={styles.text2}> <Text style={styles.textBold}>Total:</Text> Rp. {formatNumber(value.product.totalHarga)}</Text>
                        </View>
                    </View>
                )
            })}
            <View style={styles.footer}>
                <View style={styles.footer1}>
                    <Text style={styles.textFooter}>Status: </Text>
                    <Text style={styles.textFooter}>Ongkir(2-3 hari): </Text>
                    <Text style={styles.textFooter}>Total Harga: </Text>
                </View>
                <View>
                    <Text style={styles.textFooter}>{data.status.toUpperCase()}</Text>
                    <Text style={styles.textFooter}>Rp. {formatNumber(ongkir)}</Text>
                    <Text style={styles.textFooter}>Rp. {formatNumber(data.totalHarga + ongkir)} </Text>
                </View>
            </View>
        </View>
    )
}

export default CardHistori

const styles = StyleSheet.create({
    container: {
        color: Colors.white,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        marginBottom: 10
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 14
    },
    text2: {
        fontFamily: fonts.primary.reguler,
        fontSize: 12
    },
    textBold: {
        fontFamily: fonts.primary.bold,
        fontSize: 12
    },
    histori: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    image: {
        width: responsiveWidth(65),
        height: responsiveHeight(100)
    },
    desc: {

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textFooter: {
        fontFamily: fonts.primary.semibold,
        fontSize: 12,
        color: Colors.primary
    }
})
