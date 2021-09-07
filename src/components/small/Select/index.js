import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors, fonts, responsiveWidth } from '../../../utils';

const Select = ({ label, items, setItems, value, setValue, placeholder = "Pilih --", width, height = 40  }) => {
    const [open, setOpen] = useState(false);
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{ backgroundColor: 'white', borderColor: Colors.gray, height: height, borderRadius: 5, width: width }}
                textStyle={{ fontSize: 12, fontFamily: fonts.primary.reguler, color: Colors.gray2 }}
                labelStyle={{ fontSize: 12, fontFamily: fonts.primary.reguler, color: Colors.gray2 }}
                dropDownContainerStyle={{ borderColor: Colors.gray }}
                placeholder={placeholder}
                dropDownDirection="BOTTOM"
            />
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    text: {
        marginBottom: 5,
        fontFamily: fonts.primary.semibold,
        fontSize: 14
    }
})
