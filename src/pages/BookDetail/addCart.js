import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Jarak, Tombol, Line} from '../../components/small';
import {dummyColors} from '../../data';
import {
  Colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
  formatNumber,
} from '../../utils';

const AddCart = ({route, navigation}) => {
  const list = route.params.list;
  const [array, setArray] = useState(0);
  const [jumlah, setJumlah] = useState(1);
  const [keterangan, setKeterangan] = useState('');
  let berat = list.berat * jumlah;

  const rndInt = Math.floor(Math.random() * dummyColors.length);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={{marginHorizontal: responsiveWidth(30)}}>
          <View style={styles.back}>
            <Tombol
              icon="back"
              color={Colors.primary}
              padding={2}
              radius={5}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.textWrapp}>
            <Text style={styles.text}>Add Cart</Text>
          </View>
          <View style={styles.imageWrapp(rndInt)}>
            <Image
              source={{uri: list.image[array]}}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <View style={styles.textWrapp2}>
            <Text style={styles.text}>{list.name}</Text>
            <Jarak height={5} />
            <View style={styles.row}>
              <Text style={styles.text2}>
                Harga: Rp. {formatNumber(list.harga * jumlah)} (
                <Text style={styles.textWarning}>x{jumlah}</Text>)
              </Text>
              <Text style={styles.text2}>
                Berat: {berat.toFixed(1)} KG (
                <Text style={styles.textWarning}>x{jumlah}</Text>)
              </Text>
            </View>
          </View>
          <Line />
          <Text style={styles.text2}>Jumlah Barang</Text>
          <Jarak height={5} />
          <View style={styles.plusMinus}>
            <Tombol
              icon="min"
              padding={10}
              radius={5}
              color={Colors.primary}
              onPress={() => {
                if (jumlah > 1) {
                  setJumlah(jumlah - 1);
                }
              }}
            />
            <Jarak width={5} />
            <Text style={styles.text2}>{jumlah}</Text>
            <Jarak width={5} />
            <Tombol
              icon="plus"
              padding={10}
              radius={5}
              color={Colors.primary}
              onPress={() => {
                if (jumlah < list.stock) {
                  setJumlah(jumlah + 1);
                }
              }}
            />
          </View>
          <View>
            <Text>Keterangan</Text>
            <TextInput style={styles.textInput} multiline={true} onChangeText={(value) => {setKeterangan(value)}} value={keterangan} />
          </View>
        </View>
        <View style={styles.end}>
            <Tombol
              icon={'addCart'}
              text="Add Cart"
              padding={10}
              radius={5}
              textColor={Colors.white}
              color={Colors.primary}
              width={130}
              onPress={() => {navigation.navigate("Cart")}}
            />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  back: {
    position: 'absolute',
    padding: 5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    top: 10,
    left: -17,
  },
  textWrapp: {
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {
    fontFamily: fonts.primary.reguler,
    fontSize: 16,
  },
  imageWrapp: rndInt => ({
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: dummyColors[rndInt],
    borderRadius: 10,
  }),
  image: {
    width: responsiveWidth(250),
    height: responsiveHeight(300),
  },
  plusMinus: {
    flexDirection: 'row',
  },
  textWrapp2: {
    paddingVertical: 10,
  },
  textWarning: {
    color: Colors.orange,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  end: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    padding: 8,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  white: {
    color: Colors.white,
  },
  textInput: {
      width: '100%',
      height: responsiveHeight(150),
      borderWidth: 1,
      borderColor: Colors.gray,
      borderRadius: 5,
      textAlignVertical: 'top'
  }
});
