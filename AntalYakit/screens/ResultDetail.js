import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {
    return (
        <View >
            <Image 
                style={styles.container}
                // data gelene kadar hata vermemesi icin result check ediyoruz.
                source= {result.image_url ? { uri: result.image_url } : null }
                defaultSource={require('/Users/asilturk/Developer/ReactNativeProjects/AntalYakitApp/AntalYakit/src/assets/restaurant.jpeg')}
            ></Image>
            <Text style={styles.textName}>{result.name}</Text>
            <Text style={styles.textComment}> { result.review_count} Yorum İle {result.rating} Yıldız Aldı </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: 250, 
        height: 120, 
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gold',
    },
    iconStyle: {
        marginHorizontal: 15,
    },
    textName: {
        marginHorizontal: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir Next',
        textAlign: 'center',
    },
    textComment: {
        marginHorizontal: 15,
        textAlign: 'center',
        fontSize: 12,
    }
})