import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CardHistori, Jarak } from '../../small'

const ListHistori = ({data}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Jarak height={10} />
            {data.map((value) => {
                return <CardHistori data={value} key={value.id} />
            })}
            <Jarak height={50} />
        </ScrollView>
    )
}

export default ListHistori

const styles = StyleSheet.create({})
