import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign style={styles.iconStyle} name="search1" size={25} color='gray' />
            <TextInput style={styles.inputStyle} 
            placeholder = 'Search'
            placeholderTextColor={'gray'}
            autoCorrect = {false}
            autoCapitalize='none'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        marginHorizontal: 15,
    }
})