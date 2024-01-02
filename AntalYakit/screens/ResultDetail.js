import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail( {result} ) {
    return (
        <View>
            <Image
                style={{width: 250, height: 120, borderRadius: 4}}
                // data gelene kadar hata vermemesi icin result check ediyoruz.
                source={result.image_url ? { uri: result.image_url } : null}
            ></Image>
            <Text>{result.name}</Text>
            <Text>{result.rating} Yıldız { result.review_count} Değerlendirme {}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})