import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from "/Users/asilturk/Developer/ReactNativeProjects/AntalYakitApp/AntalYakit/screens/api/yelp.js";

export default function ResultShowRestaurant({route} ) {
  const [restaurant, setRestaurant] = useState(null);
  const id = route.params.id;
  const getRestaurantDetail = async (id) => { 
    // istekten donen cevabi response'a atiyoruz.
    // await kullanabilmek icin async yapmamiz gerekiyor, Swift'deki async ile ayni. =) main thread'i kitlememek icin await kullanilir. =)
    // await'in amaci cevap gelene kadar beklemesini saglamak, Swift'deki await ile ayni. =) 
    // baseURL sonrasinda / ekleyerek id'leri cekiyoruz 
    const response = await yelp.get(`/${id}`); 
    setRestaurant(response.data);
  };

  // useEffect() : UiKit'deki viewDidLoad() gibi calistirmak icin virgulden sonra bos array verirsek sadece bir kere calisir.
  // useEffect() aslinda SwiftUI'deki onAppear() 'in aynisidir. didLoad'a cevirmek icin virgulden sonra [] sarttir.
  useEffect(() => {
    getRestaurantDetail(id);
  }, []);
  
  // data gelene kadar hata vermemesi icin restaurant check ediyoruz.
  if (!restaurant) {
    return null;  
  }

  return (
    <View>
      <Text>{restaurant.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})