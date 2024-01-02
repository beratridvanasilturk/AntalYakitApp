import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';

export default function SearchBar() {
    return (
        <View>
            <Text>SearchBar</Text>
            <Icon name="search1" size={200} color='gray' />
            <Icon2 name="rocket" size={300} color="#900" />
        </View>
    )
}

const styles = StyleSheet.create({})