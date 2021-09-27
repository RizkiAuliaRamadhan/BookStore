import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Colors, responsiveHeight, responsiveWidth, fonts, uppercaseWords} from '../../../utils';
import {IconSearch} from '../../../assets';
import {Tombol, Jarak} from '../../small';
import {
  Input,
  Icon,
} from 'native-base';
import {useDispatch} from 'react-redux'
import { saveKeyword } from '../../../actions/BookAction';

const HeaderComponent = ({page, navigation}) => {
  const [Search, setSearch] = useState("")

  // redux
  const dispatch = useDispatch()

  const submit = () => {
    // action
    dispatch(saveKeyword(uppercaseWords(Search)))
    // 
    if (page !== "ListBooks") {
      navigation.navigate("ListBooks")
    }

  // Kembalikan state search kosong
  setSearch("")
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        {/* input pencarian */}
        <View style={styles.searchSection}>
          <Input
            placeholder="Cari Buku.."
            variant="filled"
            width="100%"
            bg="gray.100"
            py="1"
            px="2"
            value = {Search}
            onChangeText={(value) => {setSearch(value)}}
            onSubmitEditing={() => {submit()}}
            placeholderTextColor="gray.500"
            _hover={{bg: 'gray.200', borderWidth: 0}}
            borderWidth="0"
            _web={{
              _focus: {style: {boxShadow: 'none'}},
            }}
            InputLeftElement={
              <Icon
                // ml="1"asdasd
                size="5"
                color="gray.500"
                as={<IconSearch />}
              />
            }
          />
        </View>
        {/* Tombol Keranjang */}
        <Jarak width={responsiveWidth(10)} />
        <Tombol
          icon="cart"
          totalKeranjang={2}
          padding={10}
          color={Colors.white}
          radius={5}
          onPress={() => {navigation.navigate("Cart")}}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: responsiveHeight(80),
  },
  wrapperHeader: {
    marginVertical: responsiveHeight(15),
    marginHorizontal: responsiveWidth(30),
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingLeft: responsiveWidth(10),
    alignItems: 'center',
  },
  inputSearch: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
  },
});
