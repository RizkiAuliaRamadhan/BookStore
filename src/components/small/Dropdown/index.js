import React from 'react';
import {
  Select,
  VStack,
  CheckIcon,
  Text,
} from 'native-base';
import {Colors, fonts} from '../../../utils';
const Dropdown = ({label, placeholder, onValueChange, datas, selectedValue, isDisabled = false}) => {
  return (
    <VStack space={1}>
      <Text fontSize="sm" fontFamily={fonts.primary.bold}>
        {label} :
      </Text>
      <Select
        selectedValue={selectedValue}
        size="xs"
        paddingX={2}
        height={10}
        borderColor={Colors.gray}
        minWidth="100%"
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onValueChange={onValueChange}
        _selectedItem={{
          bg: Colors.primary,
          endIcon: <CheckIcon size={4} />,
        }}
        _item={{
          size: 'sm',
        }}>
        {datas.map(value => {
          if (label === 'Provinsi') {
            return (
              <Select.Item
                value={value.province_id}
                label={value.province}
                key={value.province_id}
              />
            );
          }
          if (label === 'Kota') {
            return (
              <Select.Item
                value={value.city_id}
                label={value.type +" "+value.city_name}
                key={value.city_id}
              />
            );
          }
        })}
      </Select>
    </VStack>
  );
};

export default Dropdown;
