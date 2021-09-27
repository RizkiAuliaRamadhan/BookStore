import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Jarak, Line, Tombol} from '../../components/small';
import {dummyColors} from '../../data';
import {
  Colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
  formatNumber,
} from '../../utils';

const BookDetail = ({route, navigation}) => {
  const list = route.params.list;
  const imageList = list.image;
  const [array, setArray] = useState(0);
  const [jumlah, setJumlah] = useState(1);
  let berat = list.berat * jumlah;

  const rndInt = Math.floor(Math.random() * dummyColors.length);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={{marginHorizontal: responsiveWidth(30)}}>
          <View
            style={styles.back}>
            <Tombol icon="back" color={Colors.primary} padding={2} radius={5} onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.textWrapp}>
            <Text style={styles.text}>Item Details</Text>
          </View>
          <View style={styles.imageWrapp(rndInt)}>
            <Image
              source={{uri: list.image[array]}}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <View style={styles.imageSmallParent}>
            {imageList.map((data, index) => {
              const random = Math.floor(Math.random() * dummyColors.length);
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.imageSmallChild(random)}
                  onPress={() => {
                    setArray(index);
                  }}>
                  <Image
                    source={{uri: data}}
                    style={styles.imageSmall}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              );
            })}
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
          <Jarak height={5} />
          <View>
            <Text style={styles.text2}>Deskripsi :</Text>
            <Text style={styles.text2}>{list.des}</Text>
            <Jarak height={55} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.end}>
        <View style={styles.endWrapp}>
          <View style={styles.end1}>
            <Tombol icon={"addCart"} text="Add Cart" padding={10} radius={5} textColor={Colors.white} color={Colors.primary} width={130} onPress={() => {navigation.navigate('AddCart', {list})}} />
          </View>   
          <View style={styles.end1}>
            <Tombol text= "Buy Now" padding={10} radius={5} color={Colors.primary} textColor={Colors.white} width={230} onPress={() => {navigation.navigate('BuyNow', {list})}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookDetail;

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
  imageSmallParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSmallChild: random => ({
    backgroundColor: dummyColors[random],
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
  }),
  imageSmall: {
    width: responsiveWidth(50),
    height: responsiveHeight(60),
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: Colors.gray,
  },
  endWrapp: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  end1: {
    flexDirection: 'row',
    alignItems: 'center'
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
});

